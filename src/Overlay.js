export default function Overlay({ inside, setInside }) {
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
          }}>
          START THE STORY
        </button>
        <br />
        Created by Ion Petropoulos. Inspired by Anderson Mancini.
      </footer>
    </>
  )
}
