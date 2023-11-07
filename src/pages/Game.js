import { Fragment } from "react";
import CardBig from "../component/CardBig"; import CardSmall from "../component/CardSmall"; import "./Game.css";
import { useNavigate } from 'react-router-dom';

export default function Game() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;
    const navigate = useNavigate();
    const poster = [
        {
            title: "Super Mario Bros", id: 1,
            rate: 4,
            genre: "Platform games",
            img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/de10961b-5990-4053-b78f-eabbba03ae83/d7ndqiw-9b9e55e3-e573-47c6-bc70-4edfa3b89043.png/v1/fit/w_828,h_1190,q_70,strp/super_mario_bros_nes_cover_by_perrito_gatito_d7ndqiw-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ3MiIsInBhdGgiOiJcL2ZcL2RlMTA5NjFiLTU5OTAtNDA1My1iNzhmLWVhYmJiYTAzYWU4M1wvZDduZHFpdy05YjllNTVlMy1lNTczLTQ3YzYtYmM3MC00ZWRmYTNiODkwNDMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.3JVIhNMLqQ8nZquAB_ua2xar55Ch33roqIyGEWctOSI",
            desc: "Super Mario Bros. is a platform game. In the game, Mario must race through the Mushroom Kingdom and save Princess Toadstool (later Princess Peach) from Bowser.[2] Mario jumps, runs, and walks across each level. The worlds are full of enemies, platforms, and open holes. If Mario touches an enemy, he dies. If he falls down a hole or misses a jump, he will also lose a life."
        },
        {
            title: "Valorant", id: 2,
            rate: 4,
            genre: "Shooter games",
            img: "https://1.bp.blogspot.com/-Bf1nqoszvRc/YCwGtOXOkeI/AAAAAAAAT3k/i_lJK2n44iktS0ZWCzv01fiYkalua3B-ACLcBGAsYHQ/s1714/SK-Yay%25C4%25B1n-Posteri.jpg",
            desc: "Valorant is a team-based first-person tactical hero shooter set in the near future.Players play as one of a set of Agents, characters based on several countries and cultures around the world. In the main game mode, players are assigned to either the attacking or defending team with each team having five players on it. Agents have unique abilities, each requiring charges, as well as a unique ultimate ability that requires charging through kills, deaths, orbs, or objectives. Every player starts each round with a classic pistol and one or more signature ability charges. Other weapons and ability charges can be purchased using an in-game economic system that awards money based on the outcome of the previous round, any kills the player is responsible for, and any objectives completed."
        },
        {
            title: "Love Live! School Idol Festival", id: 3,
            rate: 4,
            genre: "Rhythm game, rhythm action",
            img: "https://gamicsoft.sgp1.digitaloceanspaces.com/24272/blobid1675222898092.jpg",
            desc: "The game had two gameplay modes—Story and Live — which featured all nine members of the idol groups μ's and Aqours. Players acquired a score in the rhythm Live mode, in which they could tap circles at the proper time in order to receive a high score that can be placed on the leader board. These songs were divided into 4 difficulties: Easy, Normal, Hard, and Expert. Another difficulty called Master featured songs that were only available for a limited time and included rhythm icons where players had to swipe their fingers on the screen during some songs. In Story mode, the player worked as μ's' and Aqours' helper and managed their training and schedule. The mode was full-voiced with all of the idols' respective voice actresses. The players interacted with the girls as they lived their lives as school idols."
        },
        {
            title: "Final Fantasy VII", id: 4,
            rate: 4,
            genre: "Action role-playing game",
            img: "https://cdn.akamai.steamstatic.com/steam/apps/1462040/capsule_616x353.jpg?t=1696383548",
            desc: "Final Fantasy VII[a] is a 1997 role-playing video game developed by Square for the PlayStation console and the seventh main installment in the Final Fantasy series. Square published the game in Japan, and it was released in other regions by Sony Computer Entertainment, becoming the first game in the main series to have a PAL release. The game's story follows Cloud Strife, a mercenary who joins an eco-terrorist organization to stop a world-controlling megacorporation from using the planet's life essence as an energy source. Events send Cloud and his allies in pursuit of Sephiroth, a superhuman who seeks to wound the planet and harness its healing power to be reborn as a god. During their journey, Cloud bonds with his party members, including Aerith Gainsborough, who holds the secret to saving their world."
        },
        {
            title: "The Sims: High School Years", id: 5,
            rate: 4,
            genre: "Simulation game",
            img: "https://m.media-amazon.com/images/I/81ZnkpvSimL.jpg",
            desc: "This expansion pack offers players the opportunity to relive their high school years and experience the drama, excitement, and challenges of teenage life. Players will be able to create and customize their own high school, attend classes, join extracurricular activities, attend proms, and much more. While it doesn't bring many features for other age groups, this pack offers a unique experience for players who are passionate about the high school years and want to explore the ups and downs of teenage life in the virtual world."
        },
        
    ];
    

    const navigateToDetail = (item) => {
        navigate(`/game/detail/${item.id}`, { state: { movieData: item } });
    };
    

    return (
        <>
            <p id="games">Top Games</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig
                            title={item.title}
                            img={item.img}
                            genre={item.genre}
                            size={STAR_SIZE}
                            color={STAR_COLOR}
                            rate={item.rate}
                            onClick={() => navigateToDetail(item)} 
                        />
                        {poster.length === index + 1 ? (
                            <div style={{ marginRight: 40 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
            
            <div className="rowcoba">
                <div className="column">
                <p id="games">All Games</p>
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        
                        <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} rate={item.rate} 
                            onClick={() => navigateToDetail(item)} 
                        />
                        {poster.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                    </Fragment>
                ))}
                </div>
            </div>
        </>
    );

}
