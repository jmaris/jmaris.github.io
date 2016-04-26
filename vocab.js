function init() {
direction="frde";
vocab = [
	["le projet de loi","der Gesetzentwurf"],
	["le code du travail","französisches Arbeitsgesetzbuch"],
	["un accord","die Vereinbarung"],
	["accord d’entreprise","Betriebsvereinbarung"],
	["accord de branche","Branchenvereinbarung"],
	["la convention collective","der Tarifvertrag"],
	["primer sur l’accord de branche","vor der Branchenvereinbarung Vorrang haben"],
	["la primauté","der Vorrang"],
	["un surcroît d’activité","ein Auftragsmehrbedarf"],
	["travail saisonnier","saisonale Beschäftigung"],
	["le temps de travail","die Arbeitszeit"],
	["la durée de travail maximale","die Höchstarbeitszeit"],
	["fixer","festsetzen"],
	["le dépassement de la durée quotidienne maximale","die Überschreitung der täglichen arbeitszeit"],
	["augmenter la durée dutravail", "die Arbeitszeit hochsetzen"],
	["l‘assouplissement de la semaine de 35 heures","die Lockerung der 35-Stunden-Woche"],
	["le poste","die Schicht"],
	["le travail de nuit","der Nachtdienst"],
	["les heures supplémentaires","die Überstunden"],
	["la majoration des heures supplémentaires","der Überstundenzuschlag"],
	["le décompte","die Abrechnung"],
	["rémunérer des heures complémentaires","Überstunden abrechnen/auszahlen"],
	["le plancher","die Untergrenze"],
	["le plafond","die Obergrenze"],
	["la dérogation","die Ausnahmegenehmigung"],
	["l’inspection du travail","die Arbeitsaufsicht/die Arbeitsaufsichtsbehörde"],
	["autorité administrative","Behörde"],
	["le délégué du personnel","der Personalvertreter"],
	["le syndicat","die Gewerkschaft"],
	["le licenciement économique","die betriebsbedingte Kündigung/Entlassung"],
	["les difficultés économiques","wirtschaftliche Schwierigkeiten"],
	["les suppressions d’emploi","Stellenstreichungen"],
	["supprimer des emplois","Stellen streichen"],
	["les mutations technologiques","der Technologiewandel, der technologische Wandel"],
	["la fermeture de services","die Schlieβung von Abteilungen"],
	["l’externalisation de services","die Auslagerung von Abteilungen"],
	["les restructurations","Maβnahmen der Umstrukturierung"],
	["restructurations du personnel","personelle Umstrukturierungen"],
	["la baisse des recettes","schlechtere Einnahmen"],
	["la fermeture/cessation d’activité  d’entreprises","Betriebsstilllegungen"],
	["le dépôt de bilan","die Insolvenz"],
	["la compétitivité","die Wettbewerbsfähigkeit"],
	["wegen dringender betrieblicher Erfordernisse   pour des raisons impératives liées à l‘entreprise"],
	["(licenciement sans) cause réelle et sérieuse de licenciement","(Entlassung) ohne tatsächlichen und schwerwiegenden Grund"],
	["le contrat de travail","der Arbeitsvertrag"],
	["la protection contre le licenciement","der Kündigungsschutz"],
	["licencier un salarié","einem Arbeitnehmer kündigen"],
	["prononcer un licenciement","eine Kündigung aussprechen"],
	["la poursuite de l’emploi","die Weiterbeschäftigung des Arbeitnehmers"],
	["les indemnités de licenciement","die Kündigungsentschädigung"],
	["le licenciement abusif","die unbegründete Kündigung"],
	["l’indemnité de licenciement légale","die gesetzliche vorgeschriebene Kündigungsentschädigung"],
	["les mois de salaires","Gehaltszahlungen"],
	["réduire","(auf + Akk.) herabstufen"],
	["le salarié congédié/licencié", "der Entlassene"],
	["le juge","der Richter"],
	["le conseil des prud’hommes","das Arbeitsgericht"],
	["une latitude pour apprécier qc","der Ermessensspielraum"],
	["in rechtlich zulässiger Weise","en conformité avec la loi"],
	["la validation d’un accord","die Gültigkeit (validité)"],
	["les suffrages exprimés","die abgegebenen Stimmen"],
	["la représentativité","die Repräsentativität"],
	["relever un seuil","eine Schwelle, eine Untergrenze  heraufsetzen, hochsetzen"],
	["un référendum interne","eine betriebliche Abstimmung"],
	["à l’intérieur de l’entreprise, en interne"," betriebsintern"],
	["le droit à la déconnection","das Recht zum Abschalten"],
	["favorable au salarié","arbeitnehmerfreundlich"],
	["arbitraire","willkürlich"],
	["la valeur de référence, valeur indicative","der Richtwert"],
	["etwas zulassen","permettre"],
	["le cas particulier","der Sonderfall (¨e)"],
	["assouplir (la réglementation sur le licenciement)","den Kündigungsschutz lockern"],
	["l’assouplissement","die Lockerung"],
	];
	workingVocab=shuffle(vocab);
	newWord();
	$("input").on("keydown",function search(e) {
    if(e.keyCode == 13) {
        checkVocab()
    }
});
}