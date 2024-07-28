// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
export const Formats: import('../sim/dex-formats').FormatList = [
	{
		section: "Crabidraft",
	},
	{
		name: "[Gen 9] NatDex Draft Season 6",
		desc: `4v4 national dex draft format.`,
		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		ruleset: [
			"[Gen 9] 4v4 Doubles Draft",

			//Crabidraft Adjustments
			"+Past", "!!Min Source Gen = 3",
			"OHKO Clause", "Dynamax Clause",
			
			// Move Bans
			"- Hidden Power", "- Revival Blessing", "- Ally Switch", "- Expanding Force", "Z-Move Clause",
		],
		onValidateTeam(team) {
			const bannedItems = [];
			for (const set of team) {
				const item = this.dex.items.get(set.item);
				if (item.isNonstandard === "Past") {
					if (!item.megaStone) {
						bannedItems.push(`${item.name} is not in gen 9 (and not a megastone) and therefore not crabidraft legal`)
					}
				}
			}
			return bannedItems;
		},
	},
];