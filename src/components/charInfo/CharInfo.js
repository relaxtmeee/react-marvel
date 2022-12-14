import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelServices';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';
import { NavLink } from 'react-router-dom';


 const CharInfo = (props) => {

    const [char, setChar] = useState(null);

    const { loading, error, getCharacter, clearError} = useMarvelService();


    useEffect(() => {
        updateChar();
    }, [props.charId])


    const updateChar = () => {
        const {charId} = props;
        if(!charId) {
            return;
        }
        clearError();
        getCharacter(charId)
            .then(onCharLoaded)
        
    }

    const onCharLoaded = (char) => {
        setChar(char);
    }



    const skeleton = char || loading || error ? null : <Skeleton/>
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !char) ? <View char={char}/> : null;

    return (
        <div className="char__info">
            {skeleton}
            {errorMessage}
            {spinner}
            {content}
        </div>
    )

    
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char;
    const imgClassName = thumbnail != "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? "" : "dont";
    
    return (
        <>
            <div className="char__basics">
                    <img src={thumbnail} alt={name} className={imgClassName}/>
                    <div>
                        <div className="char__info-name">{name}</div>
                        <div className="char__btns">
                            <a target="_blank" href={homepage} className="button button__main" >
                                <div className="inner">homepage</div>
                            </a>
                            <a target="_blank" href={wiki} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="char__descr">
                    {description}
                </div>
                <div className="char__comics">Comics:</div>
                <ul className="char__comics-list">
                    {
                        comics.length > 0 ? null : 'There is no comics with this character'
                    }
                    {
                        comics.map((item,i) => {
                            if (i > 9) {
                                return;
                            }
                            return (
                                <li key ={i} className="char__comics-item">
                                    <NavLink target='_blank' to={`/comics/${item.resourceURI.match(/\d*$/)[0]}`}>
                                        {item.name}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
        </>
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number
};

export default CharInfo;