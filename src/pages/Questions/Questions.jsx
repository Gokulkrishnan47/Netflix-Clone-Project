import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getuser } from "../../lib/axios/api-functions/user";
import "./Questions.css";

const downcontent = [
  {
    id: "1",
    title: "What is Netflix?",
    content:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows,movies,anime,documentaries and more-on thousands of internet-connected devices You can watch as much as you warnContext,whenever you warnContext,without a single ad-all for one monthly price There is always something new to discover,and new TV shows and movies are added every week! ",

    done: false,
  },
  {
    id: "2",
    title: "How much does Netflix cost?",
    content:
      "Watch Netflix on your smartphone,tablet,Smart TV,laptop,or streaming device,all for one fixed monthly fee. Plans range from ₹ 149 to $ 649 a month.No extra costs,no contracts.",
    done: false,
  },
  {
    id: "3",
    title: "Where can i watch?",
    content:
      "Watch anywhere,anytime.Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app,including smart TVs,smartphones,tablets,streaming media players and game consoles. You can also download your favourite shows with the iOS,Andriod,or Windows 10 app.Use dowmloads to watch while you're on the go and without an internet connection.Take Netflix with you anywhere",
    done: false,
  },
  {
    id: "4",
    title: "How do i cancel?",
    content:
      "Netflix is flexible.There are no annoying contracts and no commitments.You can easily cancel your account online in two clicks.There are no cancellation fees-start or stop your account anytime",
    done: false,
  },
  {
    id: "5",
    title: "What can i watch on Netflix",
    content:
      "Netflix has an extensive library of feature films,documentaries,TV shows,anime,award-winning Netflix originals, and more.Watch as much as you want,anytime you want",
    done: false,
  },
  {
    id: "6",
    title: "Is Netflix good for kids?",
    content:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and flims in their own space.Kids profiles come with PIN-protected parental control that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.",
    done: false,
  },
];

const Questions = ({ inpt, btn }) => {
  const [down, setDown] = useState(downcontent);
  const [details, setDetails] = useState();
  const [user, setUser] = useState({ email: "" });
  const navigator = useNavigate();

  useEffect(() => {
    getuser().then(({ data }) => setDetails(data));
  }, []);
  const getstart = () => {
    const value = details?.find((val) => val.email === user.email);
    if (value?.email === user.email) {
      navigator("/login");
    }
  };
  const check = (item) => {
    setDown(
      down.map((downs) =>
        downs.id === item.id ? { ...item, done: !item.done } : downs
      )
    );
  };
  return (
    <div className="Front-tab-container">
      <h1 className="head-title">Frequently Asked Questions</h1>
      <div>
        <ul className="f-table-parent">
          {down.map((item) => (
            <div key={item.id} className="f-tabl-li">
              <li className="p-[20px] " onClick={() => check(item)}>
                {item.title}
              </li>
              <h1>
                {item.done ? <li className=" down-con">{item.content}</li> : ""}
              </h1>
            </div>
          ))}
        </ul>
      </div>
      <h1 className="text-center m-5 text-[18px]">
        Ready to watch? Enter your email to create or restart your membership.
      </h1>
      <div className="flex justify-center relative marker ">
        <input
          className={`${inpt ? inpt : ""}`}
          type="text"
          onChange={(e) => setUser({ email: e.target.value })}
        />
        <label className="absolute left-[310px]" htmlFor="">
          Email Address
        </label>
        <button className={`${btn ? btn : ""}`} onClick={() => getstart()}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Questions;
