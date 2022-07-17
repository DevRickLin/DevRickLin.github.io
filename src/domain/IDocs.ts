interface IDocs {
    frontMatter: {
        date?: string,
        title?: string,
        tags?: string[],
        page?: boolean
    };
    regularPath: string;
    relativePath: string;
}

export { IDocs }