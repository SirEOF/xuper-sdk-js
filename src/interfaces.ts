/**
 * @file Xuper SDK interfaces
 * Created by xinyi on 2019/12/19
 */

import {Cryptography, Language, Strength} from './constants';

/*
-------------------------------------------------------------------------------
Model
-------------------------------------------------------------------------------
 */

/**
 * Model Interface - Public key
 */
export interface PublicKeyModel {
    Curvname: string;
    X: string;
    Y: string;
}

/**
 * Model Interface - Private key
 */
export interface PrivateKeyModel extends PublicKeyModel {
    D: string;
}

/**
 * Model Interface - Xuper account
 */
export interface AccountModel {
    /**
     * Account address
     */
    address: string;

    /**
     * Account mnemonic
     */
    mnemonic: string;

    /**
     * Account public key model
     */
    publicKey: PublicKeyModel;

    /**
     * Account private key model
     */
    privateKey: PrivateKeyModel;
}

/*
-------------------------------------------------------------------------------
Configuration
-------------------------------------------------------------------------------
 */

/**
 * Configuration Interface - Xuper otpions
 */
export interface XuperOptions {
    // Peer ip & port
    node: string;

    // Blockchain name
    chain: string;

    // Endorse service
    needEndorse?: boolean;

    // Endorse conf
    endorseConf?: {
        fee: string;
        server: string;
        feeAddress: string;
        feeServiceAddress: string;
    };
}


/*
-------------------------------------------------------------------------------
Class interface
-------------------------------------------------------------------------------
 */

/**
 * Class Interface - Xuper SDK
 */
export interface XuperSDKInterface {
    /**
     * Account class instance
     */
    accountIns: AccountInerface;

    /**
     * Account model
     */
    accountModel?: AccountModel;

    /**
     * SDK conf
     */
    options: XuperOptions;

    /**
     * Create new account
     * @param language
     * @param strength - easy: 12, middle: 16，hard: 24
     * @param cryptography - EccFIPS
     */
    createAccount(language: Language, strength: Strength, cryptography: Cryptography): AccountModel;

    /**
     * Revert account with mnemonic
     * @param mnemonic
     * @param language
     * @param cryptography
     */
    revertAccount(mnemonic: string, language: Language, cryptography: Cryptography): AccountModel;

    /**
     * Local account balance or target address
     * @param address
     */
    getBalance(address?: string): Promise<any>;

    /**
     * Local account balance detail or target address detail
     * @param address
     */
    getBalanceDetail(address?: string): Promise<any>;

    /**
     * Check address valid
     * @param address
     */
    checkAddress(address: string): boolean;

    /**
     * Check mnemonic valid
     * @param mnemonic
     * @param language
     */
    checkMnemonic(mnemonic: string, language: Language): boolean;

    /**
     * Pre-execution transaction with utxos
     * @param toAddress
     * @param amount
     * @param fee
     */
    preExecTransaction(toAddress: string, amount: string, fee: string): Promise<any>;

    /**
     * Generate transaction
     * @param toAddress
     * @param amount
     * @param fee
     * @param desc
     */
    makeTrasaction(toAddress: string, amount: string, fee: string, desc: string): Promise<any>;

    /**
     * Post transaction
     * @param tx
     */
    postTransaction(tx: any): any;

    /**
     * Query transaction id
     * @param txid
     */
    queryTransaction(txid: string): Promise<any>;
}

/**
 * Interface - Xuper Account
 */
export interface AccountInerface {
    /**
     * Create new account
     * @param language - mnemonic language
     * @param strength - mnemonic strength
     * @param cryptography - cryptography
     */
    create(language: Language, strength: Strength, cryptography: Cryptography): AccountModel;

    /**
     * Revert account with mnemonic words
     * @param mnemonic
     * @param language
     * @param cryptography
     */
    revert(mnemonic: string, language: Language, cryptography: Cryptography): AccountModel;

    /**
     * Check address is valid
     * @param address
     */
    checkAddress(address: string): boolean;

    /**
     * Check mnemonic is valid
     * @param mnemonic
     * @param language
     */
    checkMnemonic(mnemonic: string, language: Language): boolean;

    /**
     * Converting a public key or private key to a string
     * @param key
     */
    publicOrPrivateKeyToString(key: PrivateKeyModel | PublicKeyModel): string;
}
