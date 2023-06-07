import { useState, useRef } from "react";

const Discussion = ({ obj }) => {
  const [flip, setFlip] = useState(false);
  const [edit, setEdit] = useState(false);
  const [answer_edit, setAnswer_edit] = useState(false);

  return (
    <li className="discussion__container margin_h_10">
      <header className="padding_20">
        <div className="discussion__avatar">
          <img
            className="discussion__avatar"
            src="{obj.avatarUrl}"
            alt="{obj.author}'s avatar"
          />
        </div>
        <div className="discussion__answered">
          {obj.answer ? (
            <div className="discussion__answered">
              <p className="yes">❕</p>
            </div>
          ) : (
            <p className="no">❔</p>
          )}
        </div>

        <h2
          className="discussion__title"
          onClick={() => {
            setFlip(!flip);
          }}
        >
          {obj.title}
        </h2>
        <div className="discussion__delete">
          <p className="edit">✎</p>
          <p className="delete">❌</p>
        </div>
      </header>
      {flip ? (
        <>
          {" "}
          {!edit ? (
            <article
              className="discussion__story padding_not_top_20 margin_h_10"
              dangerouslySetInnerHTML={{ __html: obj.bodyHTML }}
            ></article>
          ) : (
            <form action="" method="get" className="form">
              <input
                type="text"
                name="edit__title"
                className="edit__title padding_10"
                value="{obj.title}"
                required
              />
              <textarea
                className="edit__story padding_10 margin_h_10"
                name="edit__story"
                required
              >
                obj.bodyHTML
              </textarea>
              <input type="submit" className="edit__submit" value="edit" />
            </form>
          )}
          {obj.answer ? (
            <>
              <hr />
              <div className="answer__content padding_20">
                <header className="answer__header">
                  <div className="answer__delete">
                    <p className="edit">✎</p>
                    <p className="delete">❌</p>
                  </div>
                  <div className="answer__avatar">
                    <img
                      className="discussion__avatar"
                      src={obj.answer.avatarUrl}
                      alt={obj.answer.author + "'s Avatar"}
                    />
                  </div>
                  <div className="answer__author">{obj.answer.author}</div>
                </header>
                {!answer_edit ? (
                  <div
                    className="answer__content"
                    dangerouslySetInnerHTML={{ __html: obj.answer.bodyHTML }}
                  ></div>
                ) : (
                  <form>
                    <textarea
                      className="edit__story padding_10 margin_h_10"
                      name="edit__story"
                      required
                    >
                      {obj.answer.bodyHTML}
                    </textarea>
                    <input
                      type="submit"
                      className="edit__submit"
                      value="edit"
                    />
                  </form>
                )}
              </div>
            </>
          ) : null}
        </>
      ) : null}
    </li>
  );
};

export default Discussion;
