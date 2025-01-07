import BlogItem from "@/features/blog/BlogItem";
const blogData = [
  {
    title: "5 Wardrobe Essentials You Need",
    description:
      "Stay stylish with our must-have clothing items for the season.",
    id: 1,
    image:
      "https://res.cloudinary.com/dymitbtl3/image/upload/v1736237424/heather-ford-WlvPuu8X1Yg-unsplash_mfwlji.jpg",
    date: "7th Jan 2025",
  },
  {
    title: "How to Style Neutral Colors Like a Pro",
    description:
      "Learn the secrets to creating timeless and versatile outfits with neutral tones.",
    id: 2,
    image:
      "https://res.cloudinary.com/dymitbtl3/image/upload/v1736237577/freestocks-_3Q3tsJ01nc-unsplash_zs0pet.jpg",
    date: "2nd Jan 2025",
  },
  {
    title: "Top 2025 Fashion Trends to Watch",
    description:
      "Get ahead of the curve with our guide to the latest trends dominating the fashion scene this year.",
    id: 3,
    image:
      "https://res.cloudinary.com/dymitbtl3/image/upload/v1736237636/david-lezcano-NfZiOJzZgcg-unsplash_rf1exq.jpg",
    date: "15th Dec 2024",
  },
  {
    title: "Choosing the Perfect Outfit for Any Occasion",
    description:
      "From casual brunches to formal events, we’ve got tips to help you dress your best.",
    id: 4,
    image:
      "https://res.cloudinary.com/dymitbtl3/image/upload/v1736237675/hannah-morgan-ycVFts5Ma4s-unsplash_qzuiug.jpg",
    date: "26th Nov 2024",
  },
  {
    title: "Sustainable Fashion: Why It Matters",
    description:
      "Discover how you can make eco-friendly choices when shopping for your wardrobe.",
    id: 5,
    image:
      "https://res.cloudinary.com/dymitbtl3/image/upload/v1736237714/victor-3YW2jxSblE8-unsplash_qhplr6.jpg",
    date: "10th Nov 2024",
  },
];

function Blog() {
  return (
    <section className="grid h-full w-full items-center justify-evenly gap-6 p-6 md:grid-cols-2 xl:grid-cols-3">
      {blogData.map((item) => (
        <BlogItem
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
          date={item.date}
        />
      ))}
    </section>
  );
}

export default Blog;
