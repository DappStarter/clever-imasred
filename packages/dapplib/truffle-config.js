require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet regret remain common include clinic army gaze'; 
let testAccounts = [
"0x2128c74d8b1061a1ee85034d5da43d32090e7854aa7d3a40801f8221b93caa3b",
"0x48228e3e10091a9870d4f74a38e294ea247f2880c981315a90fb841bdf1df979",
"0xee29454e171aeffb6101430090fce702101b3c751ac65f3523249c1c8d2fe5fd",
"0x46b1e644c0b99120412207b53d6fa4cdd1521f67047e0874663f3d5d6a641e52",
"0x16e20c62c85687930a48de23dced5ec28686361364b443bbe7d8ee0fc74ddb3f",
"0x5f2b9f03f3d8aeae9fe16249748514bfe46128c5705fe08387306db42238865b",
"0xf60e9d0ee89e9026b99c7da29bfda3753ab8e8288bc93819f825a5ce2919c6d1",
"0xa03a8aea90e7670b49073f8d6475f564c886a4c96dc26f7489fb0c426960bd55",
"0x02feb4cbdbcec867306447ba64c4b48a7f0e5c3d5fed91597ecb7ec7365c0d49",
"0x58aba6b960b3a9149e45864eb43179b1d3b139db9966e3f7c02059b10dc6419b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
