export default function Overlay({ inside, setInside, ready, setReady }) {
  return (
    <>
      <header>
        <img draggable={false} width="100%" src="/merry_xmas.svg" />
      </header>
      <footer className="footer">
        <button
          className="button--explore"
          onClick={() => {
            setInside(!inside)
            setReady(true)
          }}>
          START THE STORY
        </button>
        <br />
        Created by <a href="https://ionpetro.com">Ion Petropoulos</a>. Inspired by <a href="https://andersonmancini.dev/">Anderson Mancini</a>.
      </footer>
    </>
  )
}
