import { ChangeDetectionStrategy, Component, HostBinding, Inject, Input } from '@angular/core';

export type LogoTypes = 'image' | 'link' | 'text' | 'mixed';
export type LogoSizes = 'small' | 'medium' | 'large';

export interface AppLogoConfig {
  name: string;
  imageUrl: string;
}

export const APP_LOGO_CONFIG = 'Shared.LogoComponent.Config';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent {
  @Input() type: LogoTypes = 'text';
  @Input() @HostBinding('attr.size') size: LogoSizes = 'small';

  logoText = '';
  logoImageUrl = '';

  constructor(@Inject(APP_LOGO_CONFIG) logoConfig: AppLogoConfig) {
    this.logoText = logoConfig.name;
    this.logoImageUrl = logoConfig.imageUrl;
  }
}
