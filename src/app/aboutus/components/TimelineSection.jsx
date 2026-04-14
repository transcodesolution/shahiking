import { GiCheckMark } from "react-icons/gi";

export default function TimelineSection({ title, description, points, details, align = "left" }) {
  const isRight = align === "right";

  return (
    <div className="grid md:grid-cols-2 items-center relative">
      {/* Dot */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-12 lg:top-13.5 xl:top-15 bottom-0 w-4 h-4 bg-secondary border-2 border-[#B5B4B1] rounded-full z-30"></div>

      {/* Left Empty or Content */}
      {!isRight ? <div></div> : null}

      {/* Content */}
      <div className={isRight ? "text-left md:text-right" : ""}>
        <h2
          className={`display-heading font-semibold text-primary py-2 ${
            isRight ? "mr-8 ml-4 md:ml-0" : "ml-4 md:ml-8"
          }`}
        >
          {title}
        </h2>

        <p
          className={`border border-dashed border-[#A8A7A6] max-w-169 ${
            isRight ? "ml-auto" : ""
          }`}
        ></p>

        <p
          className={`body-md mt-4 ${
            isRight ? "mr-8 ml-4 md:ml-0 text-start md:text-end" : "ml-4 md:ml-8"
          }`}
        >
          {description}
        </p>

        {points && (
          <ul
            className={`space-y-2 body-md mt-5 ${
              isRight ? "mr-8 ml-4 md:ml-0" : "ml-4 md:ml-8"
            }`}
          >
            {points.map((item, i) => (
              <li
                key={i}
                className={`flex items-center gap-2 ${
                  isRight ? "justify-start md:justify-end" : ""
                }`}
              >
                {!isRight && (
                  <span className="text-primary">
                    <GiCheckMark />
                  </span>
                )}
                {item}
                {isRight && (
                  <span className="text-primary">
                    <GiCheckMark />
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}

        <p className={`body-md mt-4 ${
            isRight ? "mr-8 ml-4 md:ml-0 text-start md:text-end" : "ml-4 md:ml-8"
          }`}>{details}</p>
      </div>

      {/* Right Empty or Content */}
      {isRight ? <div></div> : null}
    </div>
  );
}