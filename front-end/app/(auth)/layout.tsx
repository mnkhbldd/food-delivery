import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-[48px] justify-end w-screen h-screen">
      {children}
      <div className="w-screen max-w-2/3 h-full p-5">
        <div className=" flex justify-self-end items-end rounded-2xl w-full h-full repeat-0 bg-cover bg-[url('https://s3-alpha-sig.figma.com/img/5d86/e6a2/488bb31d983ecd581caec983f3a32842?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eoxj5s1-TK~GrbViOZHxK4pSodBFS6rYMKOT7MoENp9L~8xsTfb7CbK4LGoDlHG024Pqnr1vEh2CEZrCiD-VdwnL8r71lYt7v1Pr5AzCuNLP~NDK~gWuXsA0RDR7wL2UcExaEeGL1oCW9ngk64IH2Cc~esUXGZL1GZYGv87ntE6buiiix1otP36jewqGMcW0WXsctBGEIq2Ss7I1bVUGWeGdx2ope~hsDVsacouAMKwyypT8HDsu1hItn4AioaX1cB~lKCaPuzUvW1vqiyk~0Rlao85PQ2~qlW~8xb1z3rhb~CzAtme-Ng5Hw-MEzmsOEXpY79aCfA-IaglXB9jnDQ__')]"></div>
      </div>
    </div>
  );
}
