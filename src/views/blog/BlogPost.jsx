"use client";
import React from "react";
import Link from "next/link";
import { FaDownload, FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const compliancePdf = "/documents/ABPS-Compliance-Doc.pdf";

const BlogPost = () => {
  return (
    <section className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 md:p-10">
            <Link
              href="/blog"
              className="text-sm font-semibold text-sky-700 hover:text-sky-900"
            >
              Back to Blog
            </Link>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700">
              <FaFilePdf />
              PDF Document
            </div>

            <header className="mt-6">
              <p className="text-sm text-gray-500">29 May 2026</p>
              <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-slate-900 font-montserrat">
                ABPS Compliance Document
              </h1>
              <p className="mt-5 text-lg text-gray-600 leading-relaxed font-source-sans">
                This document is available for clients, partners, and project stakeholders to view,
                download, and share.
              </p>
            </header>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={compliancePdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                Open PDF
                <FaExternalLinkAlt />
              </a>
              <a
                href={compliancePdf}
                download
                className="inline-flex items-center justify-center gap-2 rounded-md border border-sky-200 px-5 py-3 text-sm font-semibold text-sky-700 transition hover:border-sky-400 hover:bg-sky-50"
              >
                Download PDF
                <FaDownload />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200 bg-gray-100">
            <iframe
              title="ABPS Compliance Document"
              src={compliancePdf}
              className="h-[720px] w-full"
            />
          </div>
        </article>
      </main>
      <Footer />
    </section>
  );
};

export default BlogPost;
