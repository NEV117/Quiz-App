import preguntas from "./preguntas2";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { shuffle } from "lodash";

function App() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuación, setPuntuación] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(120);
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 10) + 0);
  const [preguntasMezcladas, setPreguntasMezcladas] = useState(
    shuffle(preguntas.slice(randomNumber, randomNumber+5))
  );
  const [cincoPreguntas, setCincoPreguntas] = useState(preguntas.slice(randomNumber, randomNumber+5))  
  const [areDisabled, setAreDisabled] = useState(false);
  const [answersShown, setAnswersShown] = useState(false);

  function handleAnswerSubmit(isCorrect, e) {
    if (isCorrect) setPuntuación(puntuación + 1);
    e.target.classList.add(isCorrect ? "correct" : "incorrect");

    setTimeout(() => {
      if (preguntaActual === preguntasMezcladas.length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
        setTiempoRestante(120);
        setAreDisabled(false);
      }
    }, 1500);
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if (tiempoRestante === 0) setAreDisabled(true);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tiempoRestante]);

  if (isFinished)
    return (
      <main className="app">
        <div className="juego-terminado">
          <span>
            Obtuviste {puntuación} de {preguntasMezcladas.length}{" "}
          </span>
          <button onClick={() => (window.location.href = window.location.href)}>
            Volver a jugar
          </button>
          <button
            onClick={() => {
              setIsFinished(false);
              setAnswersShown(true);
              setPreguntaActual(0);
            }}
          >
            Ver respuestas
          </button>
        </div>
      </main>
    );

  if (answersShown)
    return (
      <main className="app">
        <div className="lado-izquierdo">
          <div className="numero-pregunta">
            <span> Pregunta {preguntaActual + 1} de</span> {preguntasMezcladas.length}
          </div>
          <div className="titulo-pregunta">
            {preguntasMezcladas[preguntaActual].titulo}
          </div>
          <div className="codeContainer">
            <SyntaxHighlighter language="javascript" style={materialDark}>
              {preguntasMezcladas[preguntaActual].codigo}
            </SyntaxHighlighter>
          </div>
          <div className="resContainer" >Respuesta: <span></span>
            {
              preguntasMezcladas[preguntaActual].opciones.filter(
                (opcion) => opcion.isCorrect
              )[0].textoRespuesta
            }
          </div>
          <button
            onClick={() => {
              if (preguntaActual === preguntasMezcladas.length - 1) {
                window.location.href = window.location.href;
              } else {
                setPreguntaActual(preguntaActual + 1);
              }
            }}
          >
            {preguntaActual === preguntasMezcladas.length - 1
              ? "Volver a jugar"
              : "Siguiente"}
          </button>
        </div>
      </main>
    );

  return (
    <main className="app">
      <div className="lado-izquierdo">
        <div className="numero-pregunta">
          <span> Pregunta {preguntaActual + 1} de</span> {preguntasMezcladas.length}
        </div>
        <div className="titulo-pregunta">
          {preguntasMezcladas[preguntaActual].titulo}
        </div>
        <div className="codeContainer">
          <SyntaxHighlighter language="javascript" style={materialDark}>
            {preguntasMezcladas[preguntaActual].codigo}
          </SyntaxHighlighter>
        </div>

        <div className="contContinue">
          {!areDisabled ? (
            <span className="tiempo-restante">
              Tiempo restante: {tiempoRestante}s
            </span>
          ) : (
            <button
              className="btnContinue"
              onClick={() => {
                setTiempoRestante(120);
                setAreDisabled(false);
                if (preguntaActual === preguntasMezcladas.length - 1) {
                  setIsFinished(true);
                } else {
                  setPreguntaActual(preguntaActual + 1);
                }
              }}
            >
              Continuar
            </button>
          )}
        </div>
      </div>
      <div className="lado-derecho">
        {preguntasMezcladas[preguntaActual].opciones.map((respuesta) => (
          <div className="btnContainer" key={respuesta.textoRespuesta}>
            <button
              disabled={areDisabled}
              key={respuesta.textoRespuesta}
              onClick={(e) => {
                handleAnswerSubmit(respuesta.isCorrect, e);
                setAreDisabled(true);
              }}
            >
              {respuesta.textoRespuesta}
            </button>
          </div>
        ))}
      </div>

      {areDisabled && (
        <button
          className="movilBtnContinue"
          onClick={() => {
            setTiempoRestante(10);
            setAreDisabled(false);
            if (preguntaActual === preguntasMezcladas.length - 1) {
              setIsFinished(true);
            } else {
              setPreguntaActual(preguntaActual + 1);
            }
          }}
        >
          Continuar
        </button>
      )}
    </main>
  );
}

export default App;
