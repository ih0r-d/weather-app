const images = import.meta.glob("../assets/*.png", { eager: true });

const processedImages: { [key: string]: string } = {};

for (const path in images) {
    const fileName = path.split("/").pop()?.replace(".png", "");
    const imageModule = images[path] as { default?: string } | undefined;

    if (fileName && imageModule?.default) {
        console.log(fileName)
        processedImages[fileName] = imageModule.default;
    }
}

export default processedImages;
