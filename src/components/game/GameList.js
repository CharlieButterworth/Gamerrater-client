import React, { useContext, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import { useHistory, Link } from "react-router-dom"



export const GameList = (props) => {
    const history = useHistory()
    const { games, getGames } = useContext(GameContext)

    useEffect(() => {
        getGames()
    }, [])
    console.log(games)

    return (
        <>
        <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/games/new" })
                }}
            >Register New Game</button>
        <article className="games">
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <Link to={{ pathname: `/games/${game.id}`, state: { chosenPost: game }}}>
                        Title: {game.name}
                    </Link>
                        {/* <div className="game__title">{game.title} by {game.maker}</div>
                        <div className="game__players">{game.number_of_players} players needed</div>
                        <div className="game__description">{game.description}</div>
                        <div className="game__skillLevel">Year released is {game.year_released}</div>
                        <div className="game__skillLevel">Estimated Time To Play is {game.year_released}</div>
                        <div className="game__skillLevel">Age Recommendation: {game.age_recommendation}</div> */}
                    </section>
                })
            }
        </article>
        </>
    )
}