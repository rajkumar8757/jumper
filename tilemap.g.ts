// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000030000000000000000000000000000000101010100000000000005000000000000000000000000010101010000000000000000000000000000000000000000000000000000000005000000000000000000000000010101010000000000000000000000000000000000000000000000050000000000000000000000000000000101010100000000000000000000000000000000000000010101010000000000000000000000000000000000000000000000010101010000000000000000000000000000000000000000000000000002000000000000000000000000000004040404040404040404040404040404`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 2 2 . . . . . . . . . . 
. . . . . . . . . 2 2 2 2 . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.swamp.swampTile2,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorLight0,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
