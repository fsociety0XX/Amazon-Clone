import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { db, auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    //firebase stuff
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => console.log(err.message, "error"));
  };

  const register = (e) => {
    e.preventDefault();
    //firebase stuff
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //success
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => console.log(err.message, "error"));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXMAAACICAMAAAAiRvvOAAAAz1BMVEX///8AAAD/mQCDg4NbW1teXl7r6+vY2NixsbGRkZHPz8/+lwBpaWk4ODhSUlL+lQDh4eEsLCz4+Pjx8fGZmZmnp6fU1NSurq7f399LS0tzc3MbGxvHx8f/kwDz8/N8fHwlJSX+ngC+vr5GRkaNjY0qKioQEBCAgIAXFxd3d3c0NDSgoKA/Pz/98uD99+03Nzf96s/+3rX9+vP80Z39tFn+rUX95Mb/xoL/sU3+qi/+wHP9oyP+uGL90ZX87dv82av9wnj+pzf+4sj93r3+voCbutT4AAAM/UlEQVR4nO1caUPiOhRlkc0yFossLkVABkcUhkUFBUQe7///pteWLvekaSszXXya82mmDcnNyc3dkppKCQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICCSJar1YK2Uvrku1Yr16wM+a9UKz5X6e155XlKBfV64atd5tOXtW6xYCGx+CaqWgjc+Ryxst7SfNfJhC+KNy9pCmOG/wBs8XTDStB6WB2b4I06tcn+6fH3W9mVTqd20YNHfFa1wp+IIjp3J1YQ6fHlwfcwVwZmK+Vhrn+1+0LwqeEoeJ4nnajXKTbdZ1Xl7o/2/dkebtht2uQLtr1/hjtkqnaRfaJdcOq3NEA7Ck57O4ku2ee1nITMrGgxr9zUn0rB8PPGZzyzQ8Ie8qmgK2+c3PmG7OeTu85kVhkWnI9ubCcXD7e3b0W/JSV/Q75gesEGGj5z2dc9SQI/Kqkqq4ml979HfpUrR8znvQHjY9jPPKCbfNDSNBlrzTOHdL41qlUOEze40taEo5z6ce3M1181LidPObGbPqN+bebtk4iPO8Zys0F8j5fUCvYaPsP6EybQucZ3nN86kCt5s7GDP/039Q8ACHcO5n+4F0Kjxf5MuDQp6DEDijLmlMOO8fc1uXU/y9jY7uiN/GQeUQCR3OlUufZqdUBOCcv9MbqYjgtsks2nyu2hf85jzLouOMdOPpPm1kSesDOOdFXw4eSKeE8z5/Z6Z/REJ4KuWllRQkYqR6HvxDwLnTi78xN9AmIgZybgvYCGhIghHC+aWH9qQjMi5NnGlR334VJu4gGhpoE3zg9IIea58H1Zn9TYxvN+2PG6uhgs9LV4XjGjoOR324zohBRMYF6L22EjY01blwOHdYBAtg6x4aHBofF7OAEhMv1bmTOd27BIUG4iTf+Ajn1yGTbYKKTxIg2KRtZ4+xnOe6zXqJ47cG993uNfP8yuoEwjnioUHTS94y4950tiGYLCfqAOtpu1EX5/eVap0xMid/Qaw36PQhNoIt6fh75Ly/V13F5RP2SqpccB5qKJKHZA9hnEdfMEBH6ThGUBRShwBmracM57n9HNGMReNEqRGBPP+aju0Ebsi5pbktL42GeorNeY/XVAetQJx6ygyipdNOeQbWgvyACv3Leoic25kfGLifodY5nQk4dNE4HN2cB+dOtoiRhZO6U412OM+f/OIwpuHmI5wzaYFj98Fk0VgT5mItMnJuLz244aiyIqWaP671Lh6YfBvW24NzR0cx+3OcJQT/xCu2qvnufTZ3ykQGtPefXvL+gLGICYIFrpOfgHSWQgDnJI6FGcZYSk99jHNHItAOoqEtD849QHtvf6AN7n54A/uHvrD8InBO6lmwKeLlHPwRn3Na/aIJElEamO1hnHvYliugHOwhfX4KlvgXedM37QVwTgo2MPEYOVfyBRCJzzn16tRZ0qLYAZy3KoVge57H7JcGlGDOz+FXEFeZlg8mSOw2RC5xcJ6vX93fls8HTF7P55xGr9TI0vjnA5wrlXq3dJe7Yc6M+JyjZRlQbQbfegS/gsqpuTUo532vbqLmvFrLeRVY+ZxTfaac05AhiPNm6cSjEsjlvIhtoMINCooBAaSipu2mnA9I2/g4r977VeQO45xueF/Om1mfKjqPc6YGegYvwRAj51ATMMWjnN+QtrFxzh4GMoiE87x/3ZXHOXMxAV9CDRkrJZA+mNEl5ZxayZg4D6rbRcK5V5ndAodzzLz6zKUEcIpZeAXx34O7efyc+5xAmwifc3eJhoWbc88EdA8oCSDnkGyYIW6inHOKmv3LNg1pw+e8xTm97rfbNFxyca7gfRBXDQzsI94RAc777mnHzTl74v3jrlipKh/JQ/+Cc9aUn/e6+WpAToSlrUvXzSPQHZ9Cxi9385g5Z44C7ywjGSnnzDqfVTm9s5wzTucqxQJMpA/nydtzsKt9ZyZRco7HoTdVbu8M5y28MYY3N9wSwwWRTxa3oPaQM8goOQfLSysjVAEYzvG09IFT2IZ8Ca09xEic+DxezkHN6UWeCDnHk2J60cebcyYBrafcgOoXxu5BeWisnMP021R5PnBm8aecAzlgBDxrXMyFOO5ZKSSpUIkJrLfEyjlMH/zOB+qKf8o5ODs4nKK9AOcYzWMBywJuHzjhoWtpTSYxzsG5QPkCojkn4wuDc15l1UCVxue0Os9cKurVisVj9wccwCywRV9Y/iMxzsHQUXOuQE7kEBMG53C4Ru8l4nmE85x/te3yx0WtTokHT0n3D8RJltSJcQ6XISjn6LOcyDoEzhUolNOiCV4QtldD8fogQcedx+ErtT8wGWuWiXHueYsHDahj6UPgHCNtUgKHw1Oy0AGXEG8slca1IQYd1tJaysQ4h0iZqAZz6pi2t3Doek5Of5nCjy2Of81XQ9ukBpyzc6MArn3leKMlZ8+d3Zxnv62yy3Rh2HOobzmHqq6KspkUK+xzN8x0Hsj9yb87Z0f2iXGOhQ9r6CpeIaGihsE5nmlarTkfSOxfBF+Qt/chRC6WeDBHJ1f6HPG5JpHhkGqcm+VWhBV6fJ5OX+sKWeVdk927kY9wbnKDl0fPdUUpYNHACWc+Rx6q46Z81GafGTCLSqHnoRr6J+Vz/gcEBkMHcJ5i7tUO2MsEJO1Lrt7y8fvkiqt9OPUWPxhcHMJ5wAccv0g4nxznrM55wiQ4lLoiem4fGLHHIZwHzIcmSgnWzz0/VCyD+FZIFwrn3h+3NSCX3Dtu4Lw/yF30er2LI7z25HDD+9DTAtR2EuTc6xPWskKDd5uucM6JmMqsjXua17TNDNPm/OG226xa1kGpNrtZO+ok3Hh/8IUfNid5Hsr/iNXgzZ6SkyyGdB7KJ0YPyG2Gf1vx9f7J6T3vLnirNnBx40V6F3+a6Ln/sTtQae/lM+dPv9X34vz3Bzind805JuBkX3ox90DZdneKJl/Z+ztw4xugoAlpARn7JzqSvd+isDY9a83XMDwPVMFoMEbvM9BshNaEqdWFY+MKXSVYESMfpfewmln/P+yRL1XwgeK+seP+aya0DdUe2PcH/OGgQ1EpnVjkDMpFMlD+pI8n6K3bo9weRz0qUOUiZ+GM1lfrZfs5O+36tWW7+g/XdD26g/bf/k2JfI0k/Je5LscuKVl7JregzkVb4pz7ckGoqFwVG43ileuvM0V6M7XQbTQa3StGTTX/GELfzWLptnxSzp514/1Y4uthNBw/7yaT5+fxaJq0LN8Bw9180ZFk1YCUeXndjZIW6WtjPF/Kssa0A439zDxpsaLE8C3R4Z9Xskz5tqA+JypWpBhJ6nac2OjDhSxzCNc5XycmVOQYShlJfU1I1zeWiksmHM7lL8x5aqOZUll6TyJWeFPlvd+UO8uXxeLppSOrcmZPvPSVOU89G2olzeMPFabz1/VmN6YDD9dL07bMYhcnTow7+qaWMutPERe/7fVcnSQtSLQYPck653JmPkxaFA3bPefJOfZ4MF2phqbL8jzZyFHHo6Ho6qfYdJFiZgYNsrRIelM/6YJITwlLEQfGSzNQltXlJnYTM50s1I5pTZbSFw/PHUxXdpimZlaxKvv4fanZNqljBDAjQwr5C6ehFLOMnZPI8sssJmUfTR6tXMgYcazq/+x8lyLXcEsScVVarKOf+GTVscpb6r6sNdNlkFaRj/xpsKbptyR3HicRavv0Wa8oWgNKZiVxa5iWTXTDfjoMF1BVzajyUzRGZvS86pCKorw0PejQ4D/z9SNFik0HK32aR92+70LlfTqePXZUUsKVZLvysNHNufy1E383RiuJLWjLqvyyHodi3afD3Qr41rvfOlHKyljx7+JBHTw/qgzp2m5X1c7T+278N5t+9Dx7XMoM4Rm5M3M6NSJF+UsfEnlhsuUcJUiSXmpdzifD6aHMT6fjzaNeqXVvIemVKvVEr/x0PkPZJwFsttwjM8PQaBb+cT77520YTP10ON6tXxdLidVuaxlfsZalJ/7fKmgBTNcdt1Y6Gq8fG0vLxet8ttmN30bM5ZnR23i3Wc9fnzqSxrZXP5K8YKqHYy0dlbbxTfLzYbNVPUh3WJOtox4tdzSRMS9NeHJt7ZdXV712Ln9fy2Jh96J6nBHzlN861AxYKAOqzDuE3WovdvFP85Nh+J4JUvbDodcueb5A86Df15hTjGZbvgP8Q0iytHrme98n6Ysfgx6A0fuSf/PncL7VzNPEM9xZdISWO5iO50tV9fWJwdAIX/mehxwc9395jNYvGePa1R8wr0eXHS+TIuCH4e79SQqIAd18a/nncrX5q7LBN8doN3/JqJw0nqvdWsPl6+b71azCx/Rtt149LTt6SsRcNNwH6nqqlFluV/NdOOVIARPT8W62/ne11VLPjJmP6kvQ6bwsXv+dTQTbkWI6Gg1NjATTAgICAgICAgICAgICAgICAgICAgICAgICAv97/AdAOfjgfE0NrwAAAABJRU5ErkJggg=="
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={signIn} className="login__signInButton">
            Sign In
          </button>

          <p>
            Made with{" "}
            <span role="img" aria-label="">
              ♥️
            </span>{" "}
            by <strong>Kush</strong>
          </p>

          <button onClick={register} className="login__registerButton">
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
