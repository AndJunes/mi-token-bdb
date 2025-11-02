// Cliente que usa tu configuración local de .stellar
export class TokenClient {
  constructor() {
    this.contractId = "CBUODBLVMZB7XGRPT4QWOLR4H2WGTAAL5DX3PMD5G6MHDDXWTCUVHDG2";
    this.network = "Test SDF Network ; September 2015";
    this.rpcUrl = "https://soroban-testnet.stellar.org:443";
  }

  async name() {
    return { result: "Buen Dia Token" };
  }

  async symbol() {
    return { result: "BDB" };
  }

  async decimals() {
    return { result: "7" };
  }

  async total_supply() {
    return { result: "10000000000000" }; // 1,000,000 tokens
  }

  async balance(params) {
    const balances = {
      "GCMEG2TWMFI4VBIY2WLTALKN556NK6QTXJ6FUIHZLFLIQE6ZU2444UXJ": "9500000000000", // andreabdb: 950,000 BDB
      "GD3YA67NFRSIIZSPCYXLOLT5TE2RAHZOUA75XS57GPQI6UNQ34HRJY33": "500000000000"   // bob: 50,000 BDB
    };
    return { result: balances[params.id] || "0" };
  }

  // Método para leer la configuración de identidades
  getIdentityConfig(identityName) {
    try {
      // En un entorno real, aquí leerías el archivo .stellar/identity.toml
      const identities = {
        "andreabdb": {
          secretKey: "S...", // Tu clave secreta (NO la expongas en el frontend!)
          publicKey: "GCMEG2TWMFI4VBIY2WLTALKN556NK6QTXJ6FUIHZLFLIQE6ZU2444UXJ"
        },
        "bob": {
          secretKey: "S...", 
          publicKey: "GD3YA67NFRSIIZSPCYXLOLT5TE2RAHZOUA75XS57GPQI6UNQ34HRJY33"
        }
      };
      return identities[identityName];
    } catch (error) {
      console.error("Error reading identity config:", error);
      return null;
    }
  }

  // Método para obtener información del contrato desde .stellar
  getContractInfo() {
    return {
      contractId: this.contractId,
      network: this.network,
      rpcUrl: this.rpcUrl,
      wasmHash: "20764cccd4f8033ccd68e11b870c946ef1a0808bdf2c06babbc0a59dcc56bb12"
    };
  }
}

export const networks = {
  testnet: {
    contractId: "CBUODBLVMZB7XGRPT4QWOLR4H2WGTAAL5DX3PMD5G6MHDDXWTCUVHDG2",
    networkPassphrase: "Test SDF Network ; September 2015",
    rpcUrl: "https://soroban-testnet.stellar.org:443"
  }
};