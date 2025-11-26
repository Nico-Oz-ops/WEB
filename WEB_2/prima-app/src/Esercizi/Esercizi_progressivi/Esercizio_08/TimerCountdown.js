/*
8. Timer Countdown
 
Obiettivo: Crea un timer countdown che parte da 10 secondi e si riduce di 1 ogni secondo. 
Quando il timer arriva a 0, deve fermarsi.
 
Requisiti:
 
    * Un titolo che dice "Timer Countdown"
    * useState per il valore del countdown
    * Un bottone per avviare il countdown
    * Un timer che decresce di 1 secondo alla volta
 
Concetti: gestione temporale con setInterval, aggiornamento dello stato
*/
import React, { useState, useEffect } from 'react';

const TimerCountdown = () => {
    // Inizializzo lo stato "countdown" a 10. Questo stato terrà traccia del valore del timer
    const [countdown, setCountdown] = useState(10);
    const [isActive, setIsActive] = useState(false); // serve per tenere traccia se il timer è attivo oppure no.

    // Uso useEffect per gestire il timer quando "isActive" cambia
    useEffect(() => {
        let timer = null;
        if (isActive && countdown > 0) {
            timer = setInterval(() => {
                setCountdown(prev => prev - 1);
            }, 1000);
        } else if (countdown === 0) {
            setIsActive(false); // Ferma il timer quando arriva a 0
        }
        return () => clearInterval(timer); // Pulisce l'intervallo quando il componente si smonta o isActive cambia
    }, [isActive, countdown]);

    // Funzione che avvia il countdown
    const startCountdown = () => {
        setIsActive(true);
    };

    return (
        <div>
            <h1>Timer Countdown ⏳</h1>
            <p>Tempo rimanente: {countdown} secondi</p>
            <button onClick={startCountdown} disabled={isActive || countdown === 0}>
                Avvia Countdown
            </button>
        </div>
    );
};

export default TimerCountdown;

/*
Questo componente React crea un timer countdown che parte da 10 secondi e si riduce di 1 ogni secondo.
Quando il timer arriva a 0, si ferma automaticamente. L'utente può avviare il countdown cliccando sul bottone.
*/