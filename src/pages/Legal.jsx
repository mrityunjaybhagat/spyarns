export default function Legal({ title }) {
  return (
    <div className="max-w-3xl mx-auto px-5 md:px-8 py-24">
      <h1 className="font-display text-4xl mb-8">{title}</h1>
      <p className="text-slate leading-relaxed">
        This page is a placeholder for the company's {title.toLowerCase()}. Replace this
        content with your finalised legal text before launch.
      </p>
    </div>
  );
}
