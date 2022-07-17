import fs from "mz/fs";
import globby from "globby";
import matter from "gray-matter";
import { IDocs } from "../domain/IDocs";

function rTime(date) {
  const json_date = new Date(date).toJSON();
  return json_date.split("T")[0];
}

var compareDate = function (obj1, obj2) {
  return obj1.frontMatter.date < obj2.frontMatter.date ? 1 : -1;
};

async function getDocs(): Promise<IDocs[]> {
  const paths = await globby(["**.md"], {
    ignore: ["node_modules"],
  });
  let pages = await Promise.all(
    paths.map(async (item) => {
      const content = await fs.readFile(item, "utf-8");
      const { data } = matter(content);
      data.date = rTime(data.date);
      return {
        frontMatter: data,
        regularPath: `/${item.replace(".md", ".html")}`,
        relativePath: item,
      };
    })
  );
  pages.sort(compareDate);

  return pages;
};

export { getDocs }