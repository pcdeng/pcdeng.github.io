/*
 * Copyright 2018 Quest Software and/or its affiliates
 * and other contributors as indicated by the @author tags.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, TemplateRef } from '@angular/core';

@Component({
  selector: 'sc-dialog',
  templateUrl: './sc-dialog.component.html',
  styleUrls: ['./sc-dialog.component.scss'],
})
export class ScDialogComponent implements OnInit {
  @Input() title: string;
  @Input() footTemplate: TemplateRef<any>;
  @Output() close = new EventEmitter<any>();
  @Output() destroy = new EventEmitter<any>();

  constructor(private eleRef: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    this.render.listen(this.eleRef.nativeElement, 'transitionend', (e) => {
      if (e.target === this.eleRef.nativeElement) {
        this.render.addClass(this.eleRef.nativeElement, 'hideit');
        this.destroy.emit();
      }
    });
  }

  onClose() {
    this.doClose();
  }

  onKeyDown(event: KeyboardEvent) {
    const which = event.which;
    if (which === 27) {
      this.doClose();
    }
  }

  private doClose() {
    this.render.addClass(this.eleRef.nativeElement, 'unvisible');
    this.close.emit();
  }
}
