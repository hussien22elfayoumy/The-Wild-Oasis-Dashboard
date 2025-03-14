export default function Flag({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="border-my-grey-100 block max-w-8 rounded-sm border"
    />
  );
}
