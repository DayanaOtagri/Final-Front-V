// src/mocks/handlers.js
import { rest } from 'msw'
import { API_URL } from '../app/constants';

const quoteRandom = [{
    quote: "Oh Yeah!",
    character: "Duffman",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FDuffman.png?1497567511709",
    characterDirection: "Left"
}]; 

const quoteCharacter = [{
    quote: "Oh Yeah!",
    character: "Duffman",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FDuffman.png?1497567511709",
    characterDirection: "Left"
}]; 

export const handlers = [
    rest.get(API_URL, (req, res, ctx) => {

        if(req.url.searchParams.get('character') ){
            return res(
                ctx.status(200),
                ctx.json(quoteCharacter)
                )
        }

        return res(
            ctx.status(200),
            ctx.json(quoteRandom)
        )
    })
]