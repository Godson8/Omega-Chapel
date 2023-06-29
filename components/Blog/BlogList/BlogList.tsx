import Image from "next/image";
import PortableText from "react-portable-text";
import urlFor from "../../../sanity/lib/UrlFor";
import { Block, Post } from "../../../typins";
import ClientSideRoute from "../ClientSideRoute/ClientSideRoute";
import HeaderSwiper from "../HeaderSwiper/HeaderSwiper";
import { Suspense, useState } from "react";

type Props = {
  posts: Post[];
};

function extractTextFromBlocks(blocks: Block[]): string {
  return blocks
    .map((block) => block.children?.map((child) => child.text).join(""))
    .join("");
}

function BlogList({ posts }: Props) {
  function calculateMinutesToRead(text: string) {
    const wordsPerMinute = 200; // Adjust the value according to your preference
    const words = text.split(" ");
    const minutes = Math.ceil(words.length / wordsPerMinute);
    return minutes;
  }
  const [search, setSearch] = useState("");
  const filteredPosts = posts.filter((post) => {
    if (search.toLowerCase() === "") {
      return true;
    } else {
      return post.title.toLowerCase().includes(search.toLowerCase());
    }
  });

  return (
    <div className="font-primary">
      <HeaderSwiper />
      <div className="container mt-5 md:mt-20">
        <div className="flex flex-col md:flex-row md:justify-between space-y-2 md:space-y-0 md:items-center">
          <h1 className="font-primary text-xl md:text-3xl font-bold">
            Articles
          </h1>
          <div className="max-w-lg w-full">
            <input
              type="search"
              name="blogSearch"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              id=""
              placeholder="Search Articles..."
              className="px-4 py-2 bg-white text-primary w-full focus:border focus:outline-none  rounded-full shadow-nav"
            />
          </div>
        </div>
        <hr className="mt-3 mb-6 border-primary border-opacity-10" />
        <div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 ">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <ClientSideRoute
                  key={post._id}
                  route={`/blog/post/${post?.slug.current}`}
                >
                  <div className=" rounded-xl bg-white cursor-pointer rounded-t-xl overflow-hidden shadow-nav transition-opacity duration-300">
                    <div className="h-40 lg:h-52 relative">
                      <Image
                        className="object-cover object-top rounded-t-xl hover:scale-105 transition-transform duration-200 ease-in-out"
                        src={urlFor(post.mainImage).url()}
                        alt={post.author.name}
                        layout="fill"
                      />
                    </div>
                    <div className="p-3 md:p-5">
                      <h1 className="font-bold text-base md:text-xl">
                        {post.title}
                      </h1>
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                          <div className="w-5 h-5 relative rounded-full">
                            <Image
                              src={urlFor(post.author.image).url()}
                              alt={post.author.name}
                              layout="fill"
                              className="rounded-full"
                            />
                          </div>
                          <p className="text-sm font-medium">
                            {post.author.name}
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <p className="text-xs">
                            {calculateMinutesToRead(
                              extractTextFromBlocks(post.body)
                            )}{" "}
                            min Read
                          </p>
                          <div>
                            <p className="text-xs">
                              {new Date(post._createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                }
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ClientSideRoute>
              ))
            ) : (
              <div className="text-center col-span-full">
                Sorry, no results found. Please try a different keyword or
                refine your search criteria.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
