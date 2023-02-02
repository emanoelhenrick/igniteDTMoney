import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionmodal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} />
        
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transacao</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />

        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}