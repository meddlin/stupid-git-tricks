import styles from './test.module.css';
import { Roboto_Mono } from 'next/font/google'

const RobotoMono = Roboto_Mono({
  subsets: ["latin"],
})

export default function Test() {
    const getRandomInts = (n: number) => {
        return Array.from({ length: n }, () => Math.floor(Math.random() * 100) + 1);
    };

    return (
        <>
            <div className={`${styles.overlayText}`}>
                <p 
                    className={`m-auto text-white text-6xl ${RobotoMono.className}`}
                    style={{ textShadow: `1px 1px 0 white`}}
                >
                    Stupid Git Tricks
                </p>
            </div>

            {Array.from({ length: 35 }, (_, cont_index) => {
                {/* iterate - new container */ }

                let numOfRandos_lightgreen = (30 - cont_index <= 5) ? 5 : 30 - cont_index;
                let rands_lightgreen = getRandomInts(numOfRandos_lightgreen);
                let numOfRandos_darkgreen = (15 - cont_index <= 3) ? 3 : 15 - cont_index;
                let rands_darkGreen = getRandomInts(numOfRandos_darkgreen);

                let numOfRandos_invisi = (35 - cont_index <= 20) ? 35 : 85 - cont_index;
                let rands_invisi = getRandomInts(numOfRandos_invisi);

                return (
                    <div key={cont_index} className={`${styles.container}`}>
                        {Array.from({ length: 100 }, (_, index) => {
                            {/* iterate - boxes */ }

                            console.log(`rand: ${rands_lightgreen}, index: ${index}`)
                            if (rands_lightgreen.includes(index)) {
                                return (
                                    <div key={index} className={`${styles.lightgreenBox}`}></div>
                                );
                            }

                            if (rands_darkGreen.includes(index)) {
                                return (
                                    <div key={index} className={`${styles.darkBox}`}></div>
                                );
                            }

                            if (cont_index < 20 && rands_invisi.includes(index)) {
                                return (
                                    <div key={index} className={`${styles.invisiBox}`}></div>
                                );
                            }

                            return (
                                <div key={index} className={`${styles.box}`}></div>
                            );
                        })}
                    </div>
                );
            })}

        </>
    );
}