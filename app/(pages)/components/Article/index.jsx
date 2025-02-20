"use client";
import React, { useState, useEffect } from "react";
import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";


import axios from "axios";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  // const [width, height] = useWindowSize();
  // const [imageWidth, setImageWidth] = useState(400);
  /* const blogUrl = "https://tazminmashin.ir/tips/"; */
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [posts, setPosts] = useState([]);

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // useEffect((() => {
  //   // debugger
  //   axios.get(WP_POSTS_URL)
  //     .then((res) => {
  //       let response = res.data;
  //       setPosts(response);
  //     })
  //     .catch((e) => { console.log(e); });
  // })
  //   , []);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://tazminmashin.ir/wp-json/wp/v2/posts?_embed&per_page=10",
      );
      setPosts(response.data);
    };

    fetchData();
  }, []);

  const myImageLoader = function ({ src, width, quality }) {
    return `${src.split("&")[0]}`;
  };
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const addNumberToUrl = (url, number = 1) => {
    const parsedUrl = new URL(url);
    const filename = parsedUrl.pathname.split("/").pop();
    const extension = filename.split(".").pop();
    const newFilename = `${filename.split(".")[0]}${number}.${extension}`;
    parsedUrl.pathname = parsedUrl.pathname.replace(filename, newFilename);
    return parsedUrl.toString();
  };
  /*   const url = addNumberToUrl(
      "https://tazminmashin.ir/wp-content/uploads/2024/02/lead.jpg",
      1,
    ); */

  /*  useEffect(() => {
     consoleLog_Blue(url)
   }, []) */
  const renderPosts = () => {
    if (posts.length === 0) {
      return <div>در حال بارگیری...</div>;
    }

    if (posts.length >= 10) {
      return (
        <>
          {/*<div className="flex flex-wrap gap-4 ">
            <div className="mx-8 flex w-full flex-col gap-4 md:mx-0 md:flex-row md:flex-nowrap ">
              <div className="w-full md:w-1/3">
                <article className="flex h-[454px]   w-full flex-col justify-self-end rounded-2xl bg-[#e6f0fc] px-[22px] pt-0 md:flex md:h-[386px] md:w-[468px] md:px-8   md:pt-4    ">
                
                  <section className="  flex flex-col gap-4">
                    <h4 className="  mt-8 text-xl font-bold">
                      {posts[0].title.rendered}
                    </h4>
                    <p className="pl-6 text-justify	 text-sm	 font-normal leading-loose">
                      {parse(posts[0].excerpt.rendered)}
                    </p>

                    <Link
                      className="  flex items-center justify-start gap-1 text-sm font-bold text-blue group-hover:text-white"
                      href={posts[0].guid.rendered}
                    >
                      <RightOutlined className=" group-hover:text-white" />
                      <span className=" text-sm font-bold group-hover:text-white">
                        مشاهده
                      </span>
                    </Link>
                  </section>
                </article>
              </div>
              <div className="w-full md:w-2/3">
                <article className="flex h-[454px] w-full flex-col justify-center justify-self-start  overflow-hidden rounded-2xl bg-gradient-to-r from-[#113798] to-[#031C46] pt-4 text-white md:col-span-2 md:h-[287px]    md:pt-4">
                  <section className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    <section className="flex items-center justify-center  ">
                      <Image
                        src={addNumberToUrl(
                          posts[1].yoast_head_json.og_image[0].url,
                          1,
                        )}
                        width={424}
                        height={318}
                        className="rounded  "
                        alt=""
                      />
                     
                    </section>
                 
                    <section className="mx-[22px] my-8 flex flex-col justify-center ">
                      <h4 className="text-[22px] font-bold">
                        {posts[1].title.rendered}
                      </h4>
                      <p className="font-sm text-justify text-base">
                        {parse(posts[1].excerpt.rendered)}
                      </p>
                      <Link
                        href={posts[1].guid.rendered}
                        className="mt-4 flex items-center justify-start gap-1 text-sm font-semibold text-white group-hover:text-white"
                      >
                        <RightOutlined className=" group-hover:text-white" />
                        <span className=" text-sm font-semibold group-hover:text-white">
                          مشاهده
                        </span>
                      </Link>
                    </section>
                  </section>
                </article>
              </div>
            </div>
          
            <div className="flex w-full flex-col gap-4 md:flex-row md:flex-nowrap ">
              <div className="w-full md:w-1/3">
                <article className="h-[454px] justify-center  justify-self-end rounded-2xl bg-[#3E4151] px-[22px] pt-0 text-white md:h-[350px] md:w-full md:px-8  md:pt-1  ">
                  <Image
                    className="block md:hidden "
                    src={addNumberToUrl(
                      posts[2].yoast_head_json.og_image[0].url,
                      1,
                    )}
                    width={354}
                    height={282}
                    alt="car post 2"
                  />
                  <section className="  flex flex-col gap-4">
                    <h4 className="-mt-14 text-[22px] font-bold md:mt-8 ">
                      {posts[2].title.rendered}
                    </h4>
                    <p className="font-sm text-justify text-base">
                      {parse(posts[2].excerpt.rendered)}
                    </p>

                    <Link
                      href={posts[2].guid.rendered}
                      className="flex  items-center justify-start gap-1 text-sm font-semibold text-white group-hover:text-white md:pb-7"
                    >
                      <RightOutlined className=" group-hover:text-white" />
                      <span className="  text-sm font-semibold group-hover:text-white">
                        مشاهده
                      </span>
                    </Link>
                  </section>
                </article>
              </div>
              <div className="w-full md:w-1/3">
                <article className=" flex  h-[454px] w-full  flex-col items-center justify-between justify-self-center overflow-hidden rounded-2xl  bg-[#E6F0FC] md:-mt-24 md:h-[450px] md:w-full">
                  <section className="mt-8 flex flex-col gap-4 px-[22px] md:px-8">
                    <h4 className="text-[22px] font-bold">
                      {posts[3].title.rendered}
                    </h4>
                    <p className="text-base font-normal">
                      {parse(posts[3].excerpt.rendered)}
                    </p>
                    <Link
                      href={posts[3].guid.rendered}
                      className="flex   items-center justify-start gap-1 text-sm font-semibold text-blue group-hover:text-white md:pb-7"
                    >
                      <RightOutlined className=" group-hover:text-white" />
                      <span className="mt-1 text-sm font-semibold group-hover:text-white">
                        مشاهده
                      </span>
                    </Link>
                  </section>
                  <section className="relative h-full w-full">
                    <Image
                      alt={posts[3].title.rendered}
                      className="  rounded"
                      src={addNumberToUrl(
                        posts[3].yoast_head_json.og_image[0].url,
                        1,
                      )}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </section>
                </article>
              </div>
              <div className="w-full md:w-1/3">
                <article className="h-[454px] w-full items-start justify-between justify-self-start  overflow-hidden rounded-2xl border border-solid border-[#3e4151] pt-6 md:-mt-24  md:h-[450px] md:pt-[0px]">
                  <section className="mt-2 flex flex-col gap-4 px-[22px] md:mt-8 md:px-8 ">
                    <h4 className="text-[22px] font-bold">
                      {posts[4].title.rendered}
                    </h4>
                    <p className="font-sm text-justify text-base">
                      {parse(posts[4].excerpt.rendered)}
                    </p>
                    <Link
                      href={posts[4].guid.rendered}
                      className=" flex items-center justify-start gap-1 text-sm font-semibold text-blue group-hover:text-white"
                    >
                      <RightOutlined className=" group-hover:text-white" />
                      <span className=" text-sm font-semibold group-hover:text-white">
                        مشاهده
                      </span>
                    </Link>
                  </section>
                
                  <div className="  flex justify-center">
                    <Image
                      className=" mt-12 rounded md:mt-8  "
                      alt={posts[4].title.rendered}
                      src={addNumberToUrl(
                        posts[4].yoast_head_json.og_image[0].url,
                        1,
                      )}
                      width={400}
                      height={300}
                     
                      objectFit="cover"
                  
                    />
                  </div>
                </article>
              </div>
            </div>
          </div> */}
          <section className="grid grid-cols-1 gap-4  px-4 xl:grid-cols-2 xl:px-0">
            <Link
              href={posts[0].guid.rendered}
              className="group relative w-full cursor-pointer overflow-hidden rounded-xl border"
            >
              <Image
                alt=""
                width={500}
                quality={100}
                height={500}
                className="w-full rounded-xl transition-all duration-500 group-hover:scale-[1.1] xl:h-[449px]"
                src={posts[0].yoast_head_json.og_image[0].url}
                loader={myImageLoader}
              />
              <h3 className="absolute bottom-[-30px] flex h-[80px] w-full flex-col justify-center bg-[#00000061] px-4  text-white transition-all duration-500 group-hover:h-[140px]">
                <span className="block">{posts[0].title.rendered}</span>
                <span className=" text-overflow mt-3 overflow-hidden text-ellipsis text-nowrap text-[12px] font-extralight text-gray-50">
                  {posts[0].yoast_head_json.og_description}
                </span>
              </h3>
            </Link>
            <section>
              <Link
                href={posts[1].guid.rendered}
                className="group relative block w-full cursor-pointer overflow-hidden rounded-xl border xl:h-[246px]"
              >
                <Image
                  alt=""
                  width={600}
                  quality={100}
                  height={600}
                  className="w-full rounded-xl transition-all duration-500 group-hover:scale-[1.1]"
                  src={posts[1].yoast_head_json.og_image[0].url}
                  loader={myImageLoader}
                />
                <h3 className="absolute bottom-[-30px] flex h-[80px] w-full flex-col justify-center bg-[#00000061] px-4  text-white transition-all duration-500 group-hover:h-[140px]">
                  <span className="block">{posts[1].title.rendered}</span>
                  <span className=" text-overflow mt-3 overflow-hidden text-ellipsis text-nowrap text-[12px] font-extralight text-gray-50">
                    {posts[1].yoast_head_json.og_description}
                  </span>
                </h3>
              </Link>
              <section className="mt-[5px] grid grid-cols-1 gap-4 xl:grid-cols-2">
                <Link
                  href={posts[2].guid.rendered}
                  className="group relative block h-[200px] w-full cursor-pointer overflow-hidden rounded-xl border md:h-full"
                >
                  <Image
                    alt=""
                    width={600}
                    quality={100}
                    height={600}
                    className="w-full  rounded-xl transition-all duration-500 group-hover:scale-[1.1]"
                    src={posts[2].yoast_head_json.og_image[0].url}
                    loader={myImageLoader}
                  />
                  <h3 className="absolute bottom-[-30px] flex h-[80px] w-full flex-col justify-center bg-[#00000061] px-4  text-white transition-all duration-500 group-hover:h-[140px]">
                    <span className="block">{posts[2].title.rendered}</span>
                    <span className=" text-overflow mt-3 overflow-hidden text-ellipsis text-nowrap text-[12px] font-extralight text-gray-50">
                      {posts[2].yoast_head_json.og_description}
                    </span>
                  </h3>
                </Link>
                <Link
                  href={posts[3].guid.rendered}
                  className="group relative block h-[200px] w-full cursor-pointer overflow-hidden rounded-xl border md:h-full"
                >
                  <Image
                    alt=""
                    width={600}
                    quality={100}
                    height={600}
                    className="w-full  rounded-xl transition-all duration-500 group-hover:scale-[1.1]"
                    src={posts[3].yoast_head_json.og_image[0].url}
                    loader={myImageLoader}
                  />
                  <h3 className="absolute bottom-[-30px] flex h-[80px] w-full flex-col justify-center bg-[#00000061] px-4  text-white transition-all duration-500 group-hover:h-[140px]">
                    <span className="block">{posts[3].title.rendered}</span>
                    <span className=" text-overflow mt-3 overflow-hidden text-ellipsis text-nowrap text-[12px] font-extralight text-gray-50">
                      {posts[3].yoast_head_json.og_description}
                    </span>
                  </h3>
                </Link>
              </section>
            </section>
          </section>
        </>
      );
    }
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //

  return (
    <>
      <section className="mx-auto mb-[200px] mt-10 md:mb-[100px] md:mt-[80px] md:w-[95%]  xl:w-[1440px]">
        <section className="mx-8 text-[28px] font-extrabold">
          جدیدترین مقالات
        </section>
        <section className="mx-8 mt-6 grid grid-cols-1 grid-rows-1 justify-center justify-items-center gap-6 md:mt-10 md:grid-flow-row-dense md:grid-cols-3 md:grid-rows-2   "></section>
        {renderPosts()}
      </section>
    </>
  );
}
