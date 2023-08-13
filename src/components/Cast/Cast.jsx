import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledCastList, StyledCastItem, StyledCastImg } from './Cast.styled';
import { fetchCastMovie } from 'services/api';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCastMovie(id).then(res => setCast(res.data.cast));
  }, [id]);
  return (
    <div>
      <StyledCastList>
        {cast.map(actor => (
          <StyledCastItem key={actor.id}>
            <StyledCastImg
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : `https://community.adobe.com/legacyfs/online/avatars/a829412_stormtrooper_001.png`
              }
              alt={actor.name}
            />
            <p>Name: {actor.name}</p>
            <p>Character: {actor.character}</p>
          </StyledCastItem>
        ))}
      </StyledCastList>
    </div>
  );
};

export default Cast;
