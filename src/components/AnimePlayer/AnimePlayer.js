import {
  VideoPlayer,
  VideoContainer,
  PlayerContainer,
} from "./AnimePlayerStyles";

function AnimePlayer({ currentEpisode }) {
  return (
    <PlayerContainer>
      <VideoContainer>
        <VideoPlayer
          controls={true}
          url={currentEpisode?.video}
          config={{
            file: {
              forceHLS: false,
            },
          }}
          width="100%"
          height="100%"
          pip
          playing={true}
          playsinline={true}
        />
      </VideoContainer>
    </PlayerContainer>
  );
}

export default AnimePlayer;
