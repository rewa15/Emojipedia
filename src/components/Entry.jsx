import React from "react";

function Entry(emojiArr) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {emojiArr.emoji}
        </span>
        <span>{emojiArr.name}</span>
      </dt>
      <dd>{emojiArr.meaning}</dd>
    </div>
  );
}

export default Entry;
