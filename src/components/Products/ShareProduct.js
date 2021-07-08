import React from "react";
import { useShortenUrl } from "react-shorten-url";
import copy from "copy-to-clipboard";
import "../../css/share-modal.css";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

export const ShareProduct = ({ setShareModal }) => {
  const url = window.location.href;
  console.log(url);
  const { loading, error, data } = useShortenUrl(
    "https://rabonakick.netlify.app/products/6093fe5f86a5ae04a9abb149"
  );

  const copyToClipboard = () => {
    copy(data?.link);
    alert("Url copied to clipboard");
    setShareModal(false);
  };

  return (
    <div className="modal modal-show">
      <div className="modal--window">
        <h1 className="modal--title">Share Product</h1>
        <div style={{ marginTop: "1rem" }}>
          <TwitterShareButton className="share" url={url}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <FacebookShareButton className="share" url={url}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <WhatsappShareButton className="share" url={url}>
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
        </div>
        {loading && <p className="modal--content">Please Wait...</p>}
        {error && <p className="modal--content">Something went wrong</p>}
        {data && <p className="modal--content">{data?.link}</p>}
        <div className="modal--buttons">
          <button
            className="btn btn--round btn-secondary"
            onClick={() => copyToClipboard()}>
            Copy
          </button>
          <button
            className="btn btn--round btn-outline-primary"
            onClick={() => setShareModal(false)}>
            {" "}
            Cancle{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
