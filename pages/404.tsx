import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";

type Props = {};

function NotFound({}: Props) {
  return (
    <>
      <Head>
        <title>404 | Not Found</title>
        <meta name="description" content="404 | Not Found" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 overflow-hidden">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.h1
            initial={{ y: -250 }}
            animate={{ y: -10 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            className="text-6xl font-bold"
          >
            404
          </motion.h1>
          <motion.p
            initial={{ y: -250 }}
            animate={{ y: -10 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
            className="text-2xl font-medium"
          >
            This page could not be found.
          </motion.p>
          <motion.div
            initial={{ y: -250 }}
            animate={{ y: -10 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
            className="text-2xl font-medium transition-all cursor-pointer text-dracula-pink hover:underline"
          >
            <Link href="/" prefetch={false}>
              Go back home
            </Link>
          </motion.div>
        </motion.main>
      </div>
    </>
  );
}

export default NotFound;
