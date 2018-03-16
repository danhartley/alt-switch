import { utils } from '../utils/utils.js';
import { types } from './learn-types.js';
import { strategies } from './learn-strategy.js';
import { store } from '../store/store-repo.js';
import { trees } from '../api/eol-trees.js';
// import { tejoSpecies as trees } from '../api/eol-tejo.js';

const initialScoreState = {
    total: 0,
    correct: 0,
    wrong: 0,
    answer: '',
    question: '',
    fails: [],
    passes: [],
    success: false
};

export const score = (state = initialScoreState, action) => {
    switch(action.type) {
        case types.MARK_ANSWER:
            const qAndA = action.data;
            const score = { ...state, question: qAndA.question, answer : qAndA.answer };
            score.total++;
            score.success = score.answer === score.question;
            if(score.success) {
                score.correct++;
                score.passes.push(score.question);  
            }
            else {
                score.wrong++;
                score.fails.push(score.question);
            }
            return { ...state, ...score};
        default:
            return state;
    }       
};

export const item = (state = null, action) => {
    switch(action.type) {
        case types.NEXT_ITEM:
            return { ...state, ...action.data };
        case types.NEW_SCREEN:
            return { ...state, ...action.data.item }
        default:
            return state;
    }
};

const initialStrategyState = strategies.filter(strategy => strategy.active)[0];

export const strategy = (state = initialStrategyState, action) => { 
    switch(action.type) {
        case types.NEW_SCREEN:
            return { ...state, ...action.data.strategy }
        default: 
            return state;
    }
};

const species = utils.shuffleArray(trees)
    .map(item => {
        const names = item.name.split(' ');
        item.genus = names[0];
        item.species = names[1];    
        item.name = item.name.split(' ').slice(0,2).join(' ');
        return item;
});

export const items = (state = species, action) => {    
    switch(action.type) {
        case 'LOAD_INAT_DATA':
        case 'LOAD_EOL_DATA':
        if(action.data)
            return [...action.data];
        default:
            return state;
    }
};

const answersCollection = [];
const numberOfAlternateAnswers = (species.length > 6 ? 6 : species.length) -1;
species.forEach(correctAnswer => {
    const answers = {};
    const alternateAnswers = species.filter(s => s.id !== correctAnswer.id);
    answers.species = utils.randomiseSelection(alternateAnswers, numberOfAlternateAnswers);
    answers.species.push(correctAnswer);
    answers.id = correctAnswer.id;
    answersCollection.push(answers);
});

const initialRandomState = {
    imageIndices : utils.randomiseSelection([1,2,3,4,5,6,7,8,9,10], 10, true),
    strategiesCollection : {
        strategies: utils.randomiseSelection(strategies, species.length, false).map(strategy => {
        strategy.active = true;
        return strategy;
        }),
        index: 0
    },
    answersCollection: answersCollection
};

export const randomiser = (state = initialRandomState, action) => {
    switch(action.type) {
        case types.NEW_SCREEN:
        const strategiesCollection = { strategiesCollection: { ...state.strategiesCollection, ...action.data.randomiser} };
            return { ...state, ...strategiesCollection };
        default: 
            return state;
    }
};
