import Head from "next/head";
import React, { useState } from "react";
import { Auth } from "netlify-graph-auth";
import NetlifyGraphAuth = Auth.NetlifyGraphAuth;

export default function Form(props) {
  const isServer = typeof window === "undefined";
  const [formVariables, setFormVariables] = React.useState({});
  const [result, setResult] = useState(null);
  const [auth, setAuth] = useState(
    isServer
      ? null
      : new NetlifyGraphAuth({
          siteId: props.siteId,
        })
  );

  const submitForm = async () => {
    const res = await fetch("/api/listPlaylistSongs", {
      body: JSON.stringify(formVariables),
      headers: {
        "Content-Type": "application/json",
        ...auth?.authHeaders(),
      },
      method: "POST",
    });

    const formResult = await res.json();
    setResult(formResult);
  };

  const needsLoginService = auth?.findMissingAuthServices(result)[0];

  return (
    <div className="container">
      <Head>
        <title>listPlaylistSongs form</title>
      </Head>
      <main>
        <h1>{props.title}</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            submitForm();
          }}
        >
          <label htmlFor="id">id</label>
          <input
            id="id"
            type="text"
            onChange={updateFormVariables(
              setFormVariables,
              ["id"],
              (value) => value
            )}
          />
          <input type="submit" />
        </form>
        {needsLoginService ? (
          <button
            onClick={async () => {
              await auth.login(needsLoginService);
              const loginSuccess = await auth.isLoggedIn(needsLoginService);
              if (loginSuccess) {
                console.log("Successfully logged into " + needsLoginService);
                submitForm();
              } else {
                console.log(
                  "The user did not grant auth to " + needsLoginService
                );
              }
            }}
          >
            {`Log in to ${needsLoginService}`}
          </button>
        ) : null}
        <pre>{JSON.stringify(formVariables, null, 2)}</pre>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const siteId = process.env.SITE_ID;
  if (!siteId) {
    throw new Error(
      "SITE_ID environment variable is not set. Be sure to run `netlify link` before `netlify dev`"
    );
  }

  return {
    props: {
      title: "listPlaylistSongs form",
      siteId: siteId,
    },
  };
}

const updateFormVariables = (setFormVariables, path, coerce) => {
  const setIn = (object, path, value) => {
    if (path.length === 1) {
      if (value === null) {
        delete object[path[0]];
      } else {
        object[path[0]] = value;
      }
    } else {
      if ([undefined, null].indexOf(object[path[0]]) > -1) {
        object[path[0]] = typeof path[1] === "number" ? [] : {};
      }
      setIn(object[path[0]], path.slice(1), value);
    }
    return object;
  };

  const formInputHandler = (event) => {
    // We parse the form input, coerce it to the correct type, and then update the form variables
    const rawValue = event.target.value;
    // We take a blank input to mean `null`
    const value = rawValue === "" ? null : rawValue;
    setFormVariables((oldFormVariables) => {
      const newValue = setIn(oldFormVariables, path, coerce(value));
      return { ...newValue };
    });
  };

  return formInputHandler;
};
