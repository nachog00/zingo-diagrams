export type Item = {
    title: string;
    href: string;
    description: string;
}

export const projects: Item[] = [
    {
        title: "Zcashd Deprecation",
        href: "/diagrams/zcashd-deprecation",
        description: "Deprecation DAG for zcashd"
    },
    {
        title: "ZIP 320",
        href: "/diagrams/zip-320",
        description: "ZIP 320 DAG"
    }
];