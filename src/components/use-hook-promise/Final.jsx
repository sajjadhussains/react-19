import { Suspense, use, useState } from "react";

const fetchMessage = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("shuvo");
    }, 1000);
  });
};

function MessageOutput({ messagePromise }) {
  const message = use(messagePromise);
  return <p>Here is the downloaded :{message}</p>;
}
function MessageContainer({ messagePromise }) {
  return (
    <Suspense fallback={<p>downloading message</p>}>
      <MessageOutput messagePromise={messagePromise} />
    </Suspense>
  );
}

export default function Message() {
  const [show, setShow] = useState(false);
  const [messagePromise, setMessagePromise] = useState(null);
  const download = () => {
    setMessagePromise(fetchMessage());
    setShow(true);
  };

  return show ? (
    <MessageContainer messagePromise={messagePromise} />
  ) : (
    <div className="mt-10">
      <button
        onClick={download}
        className="text-white bg-blue-500 px-5 py-2 rounded-md hover:cursor-pointer"
      >
        Download Message
      </button>
    </div>
  );
}
