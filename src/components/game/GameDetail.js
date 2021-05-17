import React, { useContext, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import { useHistory, Link, useLocation } from "react-router-dom"

export const GameDetails = (props) => {

    const {getGameById, game } = useContext(GameContext)

        const location = useLocation()

    useEffect(() => {
        
        getGameById(location.state.chosenPost.id)
    }, [])

    console.log(game, "GAMES")


    return (
        <>
        <h2>Game: {game.name}</h2>
        <div className="game__title">{game.title} by {game.maker}</div>
                        <div className="game__players">{game.number_of_players} players needed</div>
                        <div className="game__description">{game.description}</div>
                        <div className="game__skillLevel">Year released is {game.year_released}</div>
                        <div className="game__skillLevel">Estimated Time To Play is {game.year_released}</div>
                        <div className="game__skillLevel">Age Recommendation: {game.age_recommendation}</div> 

        </>
    )






}