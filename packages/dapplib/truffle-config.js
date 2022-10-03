require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift return magic modify idea knee metal gather'; 
let testAccounts = [
"0xafda093b47d5c98e22e3635a40ac41c29c169dc0c789ac2a156ab563ced0f6d4",
"0x5319b449f0d60222df6d5cef089ed86360a8bbe442f8a49221989958d99936e6",
"0xd10c0b74188a3874c313980bd8ce539013481b5b833618fd5624d20d6f3558d8",
"0xab3b1dcb678b727ff175c11ac9e5b98ef34144d0e6b9005db66e7d565c7a8cef",
"0xd7814d675edaa6aaabd08048de6a2290a835aaeaad244f910102a0bb98645fe4",
"0x4ad6672ef39a70f389520de0b84a2c60dd958cfd3208f58abc4181d79f438afd",
"0x34e91a86a36266e656ad989f6c32da6fddbc1764f9ad87269014e85b53ca365d",
"0x3f1583e1016ce3ead292baf5429fd684660b1325dabee0dd056fd0cf537f7ce5",
"0xb7e40ed8c9675814a4d94482a159755b05f00eba87dc62abfbb9d711c7eee160",
"0x46b2b2e576709753b8b326e1133ff97840dd2418c581944db7813b023b157344"
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
            version: '^0.8.0'
        }
    }
};

