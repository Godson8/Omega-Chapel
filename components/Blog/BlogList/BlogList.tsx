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
        <div className="p-2 bg-white">
          <input
            type="search"
            name="blogSearch"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id=""
            className="h-8 w-full bg-[#f3f3f3]"
          />
        </div>
        <div className="flex justify-between items-center">
          <h1 className="font-primary text-lg md:text-3xl font-bold">
            Most Recent Articles
          </h1>
          <div>
            <p className="text-sm md:text-xl text-secondary font-bold">
              All Articles
            </p>
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
                    <div className="p-4 md:p-6">
                      <h1 className="font-bold text-base md:text-xl">
                        {post.title}
                      </h1>
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-1 lg:space-y-0">
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
                            <div></div>

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
