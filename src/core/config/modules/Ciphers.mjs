/**
* THIS FILE IS AUTOMATICALLY GENERATED BY src/core/config/scripts/generateConfig.mjs
*
* @author n1474335 [n1474335@gmail.com]
* @copyright Crown Copyright 2018
* @license Apache-2.0
*/
import AESDecrypt from "../../operations/AESDecrypt";
import AESEncrypt from "../../operations/AESEncrypt";
import AffineCipherDecode from "../../operations/AffineCipherDecode";
import AffineCipherEncode from "../../operations/AffineCipherEncode";
import AtbashCipher from "../../operations/AtbashCipher";
import BifidCipherDecode from "../../operations/BifidCipherDecode";
import BifidCipherEncode from "../../operations/BifidCipherEncode";
import BlowfishDecrypt from "../../operations/BlowfishDecrypt";
import BlowfishEncrypt from "../../operations/BlowfishEncrypt";
import DESDecrypt from "../../operations/DESDecrypt";
import DESEncrypt from "../../operations/DESEncrypt";
import DeriveEVPKey from "../../operations/DeriveEVPKey";
import DerivePBKDF2Key from "../../operations/DerivePBKDF2Key";
import PseudoRandomNumberGenerator from "../../operations/PseudoRandomNumberGenerator";
import RC2Decrypt from "../../operations/RC2Decrypt";
import RC2Encrypt from "../../operations/RC2Encrypt";
import RC4 from "../../operations/RC4";
import RC4Drop from "../../operations/RC4Drop";
import TripleDESDecrypt from "../../operations/TripleDESDecrypt";
import TripleDESEncrypt from "../../operations/TripleDESEncrypt";
import VigenèreDecode from "../../operations/VigenèreDecode";
import VigenèreEncode from "../../operations/VigenèreEncode";

const OpModules = typeof self === "undefined" ? {} : self.OpModules || {};

OpModules.Ciphers = {
    "AES Decrypt": AESDecrypt,
    "AES Encrypt": AESEncrypt,
    "Affine Cipher Decode": AffineCipherDecode,
    "Affine Cipher Encode": AffineCipherEncode,
    "Atbash Cipher": AtbashCipher,
    "Bifid Cipher Decode": BifidCipherDecode,
    "Bifid Cipher Encode": BifidCipherEncode,
    "Blowfish Decrypt": BlowfishDecrypt,
    "Blowfish Encrypt": BlowfishEncrypt,
    "DES Decrypt": DESDecrypt,
    "DES Encrypt": DESEncrypt,
    "Derive EVP key": DeriveEVPKey,
    "Derive PBKDF2 key": DerivePBKDF2Key,
    "Pseudo-Random Number Generator": PseudoRandomNumberGenerator,
    "RC2 Decrypt": RC2Decrypt,
    "RC2 Encrypt": RC2Encrypt,
    "RC4": RC4,
    "RC4 Drop": RC4Drop,
    "Triple DES Decrypt": TripleDESDecrypt,
    "Triple DES Encrypt": TripleDESEncrypt,
    "Vigenère Decode": VigenèreDecode,
    "Vigenère Encode": VigenèreEncode,
};

export default OpModules;
