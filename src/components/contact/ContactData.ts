export const ContactData = [
  {
    key: "Email",
    notice: {
      level: "info",
      text: null,
      detail:
        "「ruste.red」「mailbox.org」のドメインからメールを受信できるよう、設定を行なってください",
    },
    detail: [
      {
        a: "Mai1 4ddress : contact(ぁ)ruste.red",
        link: "",
      },
      {
        a: "OpenPGP Public Key",
        link: "https://keys.openpgp.org/vks/v1/by-fingerprint/580FDDD3A664F55E836D9FD3FF81DCC7329C30CF",
      },
    ],
  },
  {
    key: "twitter DM",
    notice: {
      level: "warning",
      text: "(Deprecated)",
      detail: "twitter DMはIRIAMの返礼品受け取り以外の用途では解放していません",
    },
    detail: [
      { a: "twitter: @LiddleBRM", link: "https://twitter.com/LiddleBRM" },
    ],
  },
];

// NOTE 最終的にはソースではなくyamlとかで管理するようにしたい
