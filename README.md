# blockchain-voting

MIRO - https://miro.com/app/board/o9J_knPn4ZY=/

# Decrypt keys

openssl pkcs12 -info -in Staging_Signature_PrivateKey.p12 -nodes
(Password: public)

openssl x509 -pubkey -in uidai_auth_stage.cer -noout

## Diffie Hellman

    g = 17
    p = 541
