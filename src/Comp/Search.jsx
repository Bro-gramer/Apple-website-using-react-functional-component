function Search() {
  return (
    <>
        <section className="searchbox">
			<form>
				<input type="text" name="searchbox" />
				<button id="submitButton" className="btn btn-primary" type="submit">
					Search
				</button>
			</form>
		</section>
    </>
  )
}

export default Search;