import { Document } from "@/lib/@dsvgui";
import { wrapText } from "@/lib/@dsvgui/utils";
import { getTextWidth } from "@/lib/@dsvgui/utils/index";

import { AiOutlineCalendar, AiOutlineLike } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { IoPersonCircleOutline } from "react-icons/io5";

export type IArticle = {
  articles: Array<{
    meta: {
      title: string;
      description: string;
      author: string;
    };
    thumbnail: {
      value: string;
      width: number;
      height: number;
    };
    publish_date: string;
    like_count: number;
    reading_time_minutes: number;
  }>;
};

export const Article: React.FC<IArticle> = ({ articles }) => {
  const documentId = Math.random().toString(36).substr(2, 9);

  const innerPadding = 30;
  const thumbnailWidth = 100;
  const titleWidth =
    Math.max(
      ...articles.map((article) =>
        getTextWidth(article.meta.title, { fontSize: 16, fontWeight: 700 })
      ),
      400
    ) + 20;
  const containerWidth = titleWidth + thumbnailWidth + innerPadding;

  return (
    <Document
      w={containerWidth}
      h={100 * articles.length}
      padding={0}
      useBranding={false}
    >
      <g clipPath="url(#clip_borders)">
        {articles.map((article, key: number) => {
          const yOffset = 100 * key;
          const xOffset = 120;

          const title = wrapText(
            article.meta.title,
            { maxLineWidth: titleWidth, fontSize: 16, fontWeight: 700 },
            (line: string, index: number) => (
              <tspan key={index} x="0" dy={index === 0 ? 0 : 25}>
                {line}
              </tspan>
            )
          );

          return (
            <>
              {key !== 0 && (
                <line
                  x1={100}
                  y1={yOffset}
                  x2={containerWidth}
                  y2={yOffset}
                  className="divider"
                  stroke="#dddddd"
                />
              )}
              <g transform={`translate(0 ${yOffset})`}>
                <g transform={`translate(${xOffset} 24)`}>
                  <text
                    xmlSpace="preserve"
                    fontFamily="Manrope"
                    fontWeight="700"
                    fill="#0c0c0c"
                    fontSize="16"
                  >
                    {title}
                  </text>
                  <text
                    fill="#999999"
                    xmlSpace="preserve"
                    fontSize={12}
                    fontFamily="Manrope"
                    y={5 + title.length * 15}
                  >
                    {wrapText(
                      article.meta.description.replace(/\n/gm, " "),
                      {
                        maxLineWidth: titleWidth - 20,
                        fontSize: 12,
                        maxLines: 3,
                      },
                      (line: string, index) => (
                        <tspan key={index} x="0" dy={index === 0 ? 0 : 13}>
                          {line}
                        </tspan>
                      )
                    )}
                  </text>
                </g>

                <g transform={`translate(${xOffset} 90)`}>
                  <g transform={`translate(${15} 0)`}>
                    <AiOutlineCalendar
                      className="icon"
                      x={-18}
                      y={-11}
                      fontSize="15px"
                    />
                    <text fill="#555" fontSize="12" x="3" y="1">
                      {article.publish_date}
                    </text>
                  </g>
                  <g transform={`translate(${15 + titleWidth / 4} 0)`}>
                    <AiOutlineLike
                      className="icon"
                      x={-18}
                      y={-11}
                      fontSize="15px"
                    />
                    <text fill="#555" fontSize="12" x="3" y="1">
                      {article.like_count} likes
                    </text>
                  </g>
                  <g transform={`translate(${15 + titleWidth / 2} 0)`}>
                    <BiTimeFive
                      className="icon"
                      x={-18}
                      y={-11}
                      fontSize="15px"
                    />
                    <text fill="#555" fontSize="12" x="3" y="1">
                      {article.reading_time_minutes} mins
                    </text>
                  </g>
                  <g transform={`translate(${15 + (titleWidth / 4) * 3} 0)`}>
                    <IoPersonCircleOutline
                      className="icon"
                      x={-18}
                      y={-11}
                      fontSize="15px"
                    />
                    <text fill="#555" fontSize="12" x="3" y="1">
                      {article.meta.author}
                    </text>
                  </g>
                </g>

                <g clipPath={`url(#clip_image_${documentId}${key})`}>
                  <rect
                    width={500}
                    height={500}
                    fill={`url(#pattern_${documentId}${key})`}
                  />
                </g>
              </g>

              <defs>
                <clipPath id={`clip_image_${documentId}${key}`}>
                  <rect width={100} height={100} fill="white" />
                </clipPath>
                <pattern
                  id={`pattern_${documentId}${key}`}
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref={`#image_${documentId}${key}`}
                    transform={`matrix(0.000837427 0 0 0.000814996 -0.172454 0)`}
                  />
                </pattern>
                <image
                  id={`image_${documentId}${key}`}
                  transform={`translate(50 -130)`}
                  width={article.thumbnail.width}
                  height={500}
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xlinkHref={`data:image/png;base64,${article.thumbnail.value}`}
                />
              </defs>
            </>
          );
        })}
      </g>

      <defs>
        <clipPath id="clip_borders">
          <rect
            width={containerWidth}
            height={100 * articles.length}
            rx="20"
            fill="white"
          />
        </clipPath>
      </defs>
    </Document>
  );
};
