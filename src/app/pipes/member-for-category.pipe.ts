import { Pipe, PipeTransform } from '@angular/core';
import { BoardMember } from '../model/board-member';
import { SimpleItem } from '../model/simple-item';

@Pipe({
  name: 'memberForCategory'
})
export class MemberForCategoryPipe implements PipeTransform {

  transform(members: BoardMember[], category: SimpleItem): BoardMember[] {
    return members.filter(member => member.boardMemberCategory.id === category.id)
      .sort((a, b) => {
        if ((a.sortPriority) ?? 0 > (b.sortPriority ?? 0)) { return 1; }
        if ((a.sortPriority ?? 0) < (b.sortPriority ?? 0)) { return -1; }
        return 0;
      });
  }
}