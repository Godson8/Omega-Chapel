import Link from "next/link";
import { useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Alert, Snackbar } from "@mui/material";

const Share = ({ title }: any) => {
  const [showDiv, setShowDiv] = useState(false);
  const [copied, setCopied] = useState(false);
  const handleClick = () => {
    setShowDiv(true);
  };

  const handleCopy = () => {
    setCopied(true);
  };

  const handleClose = () => {
    setCopied(false);
  };

  return (
    <div className="md:max-w-[350px] flex flex-col items-center space-y-3 justify-self-center p-3 rounded-xl border bg-primary shadow-nav">
      {showDiv ? (
        <div className="px-5">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-white text-base">Share this article</p>
            <div>
              <div className="flex space-x-4">
                <div className="cursor-pointer">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=https%3A//www.omegachapel.org/blog/post/${title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex justify-center items-center h-7 w-7 border rounded-full">
                      <FaFacebookF color="white" size={12} />
                    </div>
                  </a>
                </div>
                <div className="cursor-pointer">
                  <a
                    href={`mailto:?subject=${title}&body=Check%20out%20this%20article:%20https%3A//www.omegachapel.org/blog/post/${title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex justify-center items-center h-7 w-7 border rounded-full">
                      <FaEnvelope color="white" size={12} />
                    </div>
                  </a>
                </div>
                <div className="cursor-pointer">
                  <a
                    href={`https://twitter.com/intent/tweet?url=https%3A//www.omegachapel.org/blog/post/${title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex justify-center items-center h-7 w-7 border rounded-full">
                      <FaTwitter color="white" size={12} />
                    </div>
                  </a>
                </div>
                <CopyToClipboard
                  text={`https://www.omegachapel.org/blog/post/${title}`}
                  onCopy={handleCopy}
                >
                  <div className="cursor-pointer">
                    <div className="flex justify-center items-center h-7 w-7 ">
                      <p className="text-white text-[8px] text-center">
                        COPY LINK
                      </p>
                    </div>
                  </div>
                </CopyToClipboard>
              </div>
            </div>
          </div>
          <input
            type="text"
            className="p-2 text-xs  bg-primary text-white w-full focus:border border mt-2 border-tertiary border-opacity-25 focus:outline-none focus:border-primary rounded-md"
            readOnly
            value={`https://www.omegachapel.org/blog/post/${title}`}
          />
          <Snackbar open={copied} autoHideDuration={3000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Link copied to clipboard
            </Alert>
          </Snackbar>
        </div>
      ) : (
        <>
          <p className="text-center text-white">
            Know someone who needs to read this article?
          </p>

          <button
            className="bg-[#FF671F] text-white text-sm px-[18px] py-3 font-bold w-fit rounded-xl hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer"
            onClick={handleClick}
          >
            SHARE THIS ARTICLE
          </button>
        </>
      )}
    </div>
  );
};

export default Share;
