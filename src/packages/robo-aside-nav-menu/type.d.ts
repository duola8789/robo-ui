declare interface TypeMenuItem {
    path: string;
    title: string;
}

declare interface TypeMenuConfig {
    path: string;
    icon: string;
    title: string;
    children: TypeMenuItem[];
}
