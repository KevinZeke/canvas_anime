require.config({
	paths:{
		Canvas:"module/Canvas",
		Common:"module/Common",
		Thing:"module/Thing",
		GameLoop:"module/GameLoop",
		util:"util",
		image:"../lib/image"
	}
});

require(["util"],function (util) {
	util.bginit();
	util.initFruits();
});