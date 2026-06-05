"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight, FaFilePdf } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const compliancePdf = "/documents/ABPS-Compliance-Doc.pdf";

const BlogPage = () => {
  const post = {
    title: "ABPS Compliance Document",
    description:
      "View and share the All Building & Property Services compliance document for clients, partners, and project stakeholders.",
    date: "29 May 2026",
    path: "/blog/abps-compliance",
  };

  return (
    <section className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">
            Blog
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-slate-900 font-montserrat">
            Resources & Documents
          </h1>
          <p className="mt-4 max-w-2xl text-gray-600 leading-relaxed font-source-sans">
            Important documents and updates from All Building & Property Services.
          </p>
        </header>

        <article className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700">
                <FaFilePdf />
                PDF Document
              </div>
              <p className="mt-5 text-sm text-gray-500">{post.date}</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 font-montserrat">
                {post.title}
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed font-source-sans">
                {post.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:min-w-48">
              <Link
                href={post.path}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                Read Post
                <FaArrowRight />
              </Link>
              <a
                href={compliancePdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-sky-200 px-5 py-3 text-sm font-semibold text-sky-700 transition hover:border-sky-400 hover:bg-sky-50"
              >
                Open PDF
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </section>
  );
};

export default BlogPage;
